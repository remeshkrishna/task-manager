import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { addTaskList } from "../store/taskSlice"
import TaskCard from "./TaskCard"

const TaskList=()=>{
    const dispatch = useDispatch()
    const token = useSelector((store)=>store.user.token)
    const loginState = useSelector((store)=>store.user.loginState)
    let taskList = useSelector((store)=>store.task.taskList)
    const taskCardType = useSelector((store)=>store.task.activeTaskCard)

    if(taskCardType=="COMPLETED TASKS"){
        taskList = taskList?.filter((item)=>item.status=="Completed")
    }
    else if(taskCardType=="PENDING TASKS"){
        taskList = taskList?.filter((item)=>item.status=="Pending")
    }
    else if(taskCardType=="IN-PROGRESS TASKS"){
        taskList = taskList?.filter((item)=>item.status=="In Progress")
    }

    if(!loginState) return
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
            <ul className="grid grid-cols-7 rounded-t-2xl  text-center text-white place-items-center bg-black opacity-95 font-bold">
                <li className="w-full border border-gray-600 rounded-t-2xl rounded-r-none p-4">name</li>
                <li className="w-full border border-gray-600 p-4">description</li>
                <li className="w-full border border-gray-600 p-4">due_date</li>
                <li className="w-full border border-gray-600 p-4">priority</li>
                <li className="w-full border border-gray-600 p-4">status</li>
                <li className="w-full border border-gray-600 p-4 rounded-t-2xl rounded-l-none">assigned_to</li>
                <li className="w-full h-full p-4 rounded-t-2xl rounded-l-none bg-gray-500"></li>
            </ul>
            </div>
            <div  className="w-full mt-0 p-2 pt-0">
                {taskList?taskList.map((item)=>
            <TaskCard key={item.id} task_id={item.id} task_name={item.name} task_des={item.description} task_dueDate={item.due_date} task_priority={item.priority} task_status={item.status} task_assignTo={item.assigned_to}/>
        ):"No tasks"}
            </div>
        </div>
        
            
        
    )
}

export default TaskList