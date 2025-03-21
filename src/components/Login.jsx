import { useState } from "react"
import { useRef } from "react"
import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLoginState, setToken, setUser } from "../store/userSlice"
import { addTaskList } from "../store/taskSlice"


const Login=()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formType, setFormType] = useState("signin")
    const [message, setMessage] = useState('')
    const [name, email, pass, confirmPass] = [useRef(null), useRef(null), useRef(null), useRef(null)]
    
    

    const restForm=()=>{
        if(name.current){
            name.current.value=""
        }
        if(email.current){
            email.current.value=""
        }
        if(pass.current){
            pass.current.value=""
        }
        if(confirmPass.current){
            confirmPass.current.value=""
        } 
    }

    const toggleForm = ()=>{
        console.log(formType)
        setFormType(formType==="signup"?"signin":"signup")
        setMessage("")
        restForm()
    }

    const getUser = async(token)=>{
        const data = await fetch('http://localhost:8000/users/me',{
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        const user = data.json()
        return user
    }
    
    const getAccessToken = async(email,pass)=>{
        const formData = new FormData()
        formData.append("username",email)
        formData.append("password",pass)
        let response;
        const data =  await fetch('http://localhost:8000/token',{
            method: 'POST',
            body: formData
        })
        response = await data.json();
        return response
    }
    
    const validateForm=(email, pass,  name, confirmPass)=>{
        if(name){
            console.log("name:"+name)
            const nameRegex=/^[A-Za-z\s]{3,50}$/
            if(!nameRegex.test(name)) return "Name not valid"
        }
        const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailRegex.test(email)) return "Email not valid"
    
        const passRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if(!passRegex.test(pass)) return "Password Not Valid"
    
        if(confirmPass){
            if(pass!==confirmPass) return "Password not matching"
        }
        return ""
    
    }

    const fetchTaskList = async (token)=>{
            const data = await fetch('http://localhost:8000/tasks/mytasks',{
                headers: {
                    'Authorization':'Bearer '+token
                }
            })
            const dataJson = await data.json()
            console.log(dataJson)
            dispatch(addTaskList(dataJson))
        }
    
    const handleSigninSignup=async()=>{
        if(formType=="signin"){
            const msg = validateForm(email.current.value, pass.current.value);
            if(msg===""){
                let response = await getAccessToken(email.current.value,pass.current.value)
                if(response.access_token){
                    dispatch(setLoginState(true))
                    dispatch(setToken(response.access_token))
                    const user=await getUser(response.access_token)
                    dispatch(setUser(user))
                    await fetchTaskList(response.access_token)
                    navigate("/dashboard")
                }
                else{
                    console.log("Sign In failed")
                    setMessage(response.detail)
                }   
            }
            else{
                console.log("Sign In failed")
                setMessage(msg)
            }
        }
        else{
            const msg = validateForm( email.current.value, pass.current.value, name.current.value, confirmPass.current.value);
            if(msg===""){
                console.log("Sign Up successful")
                const data = await fetch('http://localhost:8000/signup',{
                    method: 'POST',
                    body: JSON.stringify({
                        name: name.current.value,
                        email: email.current.value,
                        password: pass.current.value
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                const response = await data.json()
                if(!response.id){
                    setMessage(response.detail.message)
                }
                else{
                    setMessage("User registered successfully. Please login")
                    restForm()
                }
            }
            else{
                console.log("Sign Up failed")
                setMessage(msg)
            }
        }
    }
    return (
        <div  className="grid bg-black w-full h-screen p-4 place-items-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://wallpapers.com/images/hd/futuristic-project-management-inbiirodqxwccs7h.jpg')"}}>
            <form onSubmit={(e)=>e.preventDefault()} className={(formType==="signin"?"h-1/3":"h-1/2")+" w-2/12  bg-gray-100 rounded-2xl"}>
                <div className="flex flex-col w-full h-full justify-center items-center gap-4">
                    {formType==="signup" && <input ref={name} className="w-[80%] p-4 rounded-2xl bg-gray-700 text-white shadow-xl" type="text" placeholder="Full Name" required/>}
                    <input ref={email} className="w-[80%] p-4 rounded-2xl bg-gray-700 text-white" type="text" placeholder="Email address" required/>
                    <input ref={pass} className="w-[80%] p-4 rounded-2xl bg-gray-700 text-white" type="password" placeholder="password" required/>
                    {formType==="signup" && <input ref={confirmPass} className="w-[80%] p-4 rounded-2xl bg-gray-700 text-white" type="password" placeholder="Confirm Password" required/>}
                    <div className="flex w-[80%] rounded-2xl bg-gray-100 text-white gap-3 justify-center items-center">
                        <button onClick={handleSigninSignup} className="w-[50%] p-4 rounded-2xl bg-blue-400 text-white overflow-hidden hover:cursor-pointer">{formType==="signup"?"Sign Up":"Sign In"}</button>
                        {formType==="signup" && <button className="w-[50%] p-4 rounded-2xl bg-blue-400 text-white overflow-hidden hover:cursor-pointer">Use Code</button>}
                    </div>
                    <span className={message==="User registered successfully. Please login"?"text-green-700":"text-red-600"}>{message}</span>
                    <button  onClick={toggleForm} className="w-[80%] p-4 rounded-2xl text-black hover:cursor-pointer">{formType==="signup"?"Existing User? Login here":"New User? Sign Up"}</button>
                    
                </div>
                
            </form>

        </div>
    )
}

export default Login