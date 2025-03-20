import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLoginState, setToken, setUser } from "../store/userSlice"

const getUser = async(token)=>{
    const data = await fetch('http://127.0.0.1:8000/users/me',{
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
    const data =  await fetch('http://127.0.0.1:8000/token',{
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

export const useHandleSigninSignup=async()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if(formType=="signin"){
        const msg = validateForm(email.current.value, pass.current.value);
        if(msg===""){
            let response = await getAccessToken(email.current.value,pass.current.value)
            if(response.access_token){
                dispatch(setLoginState(true))
                dispatch(setToken(response.access_token))
                const user=await getUser(response.access_token)
                dispatch(setUser(user))
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
