import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTaskList } from "../store/taskSlice"

const TaskList=()=>{
    const dispatch = useDispatch()
    const token = useSelector((store)=>store.user.token)
    const taskList = useSelector((store)=>store.task.taskList)
    const fetchTaskList = async ()=>{
        const data = await fetch('http://localhost:8000/tasks/mytasks',{
            headers: {
                'Authorization':'Bearer '+token
            }
        })
        const dataJson = await data.json()
        console.log(dataJson)
        dispatch(addTaskList(dataJson))
    }

    useEffect(()=>{
        fetchTaskList()
    },[])
    return (
        <div className="w-full bg-gray-500">
        <div className="w-full mb-0 p-2 rounded-t-2xl pb-0">
            <ul className="grid grid-cols-6 rounded-t-2xl  text-center text-white place-items-center bg-black opacity-95 font-bold">
                <li className="w-full border border-gray-600 rounded-t-2xl rounded-r-none p-4">name</li>
                <li className="w-full border border-gray-600 p-4">description</li>
                <li className="w-full border border-gray-600 p-4">due_date</li>
                <li className="w-full border border-gray-600 p-4">priority</li>
                <li className="w-full border border-gray-600 p-4">status</li>
                <li className="w-full border border-gray-600 p-4 rounded-t-2xl rounded-l-none">assigned_to</li>
            </ul>
            </div>
            <div  className="w-full mt-0 p-2 pt-0">
                {taskList?taskList.map((item)=><ul key={item.id} className="grid grid-cols-6 place-items-center bg-gray-800 text-white  text-center">
                <li className="w-full border border-gray-300 p-4 overflow-x-clip">{item.name}</li>
                <li className="w-full border border-gray-300 p-4 overflow-x-clip">{item.description}</li>
                <li className="w-full border border-gray-300 p-4 overflow-x-clip">{item.due_date}</li>
                <li className="w-full border border-gray-300 p-4 overflow-x-clip">{item.priority}</li>
                <li className={`w-full border border-gray-300 p-4 overflow-x-clip ${item.status=="Completed"?"bg-green-500":"bg-orange-400"}`}>{item.status}</li>
                <li className="w-full border border-gray-300 p-4 overflow-x-clip">{item.assigned_to}</li>
            </ul>):"No tasks"}
            </div>
        </div>
        
            
        
    )
}

export default TaskList