import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTaskList } from "../store/taskSlice"

const TaskCard=({task_id,task_name,task_des, task_dueDate, task_priority, task_status, task_assignTo})=>{
    const dispatch = useDispatch()
    const token = useSelector((store)=>store.user.token)
    const [name, desc, dueDate, priority, status, assignTo] = [useRef(task_name),useRef(task_des),useRef(task_dueDate),useRef(task_priority),useRef(task_status),useRef(task_assignTo)]
    const [isEditable, setIsEditable] = useState(false) 
    const handleEdit=()=>{
        if(isEditable){
            cancelChanges()
        }
        setIsEditable(!isEditable)
    }

    const cancelChanges = ()=>{
        if(name){
            name.current.value=task_name
            desc.current.value=task_des
            dueDate.current.value=task_dueDate
            priority.current.value=task_priority
            assignTo.current.value=task_assignTo
            status.current.value=task_status
        } 
    }
    const deleteTask=async ()=>{
            const data = await fetch('http://localhost:8000/deletetask/'+task_id,{
                method: 'DELETE',
                headers: {
                    'Authorization':'Bearer '+token
                }
            })
            if(data.ok){
                fetchTaskList(token)
            }
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

    return(
        
        <form onSubmit={(e)=>e.preventDefault()}>
                    <div   className="grid grid-cols-7 place-items-center bg-gray-800 text-white  text-center">
                    <input
                            className="w-full h-full border border-gray-300 p-4 overflow-x-clip read-only:"
                            readOnly={!isEditable}
                            ref={name}
                            type="text"
                            defaultValue={task_name} 
                        />
                        <textarea
                            className="w-full border border-gray-300 p-4 overflow-x-clip"
                            readOnly={!isEditable}
                            ref={desc}
                            placeholder="Description"
                            defaultValue={task_des}
                        ></textarea>
                        <input
                            className="w-full h-full border border-gray-300 p-4 overflow-x-clip"
                            readOnly={!isEditable}
                            ref={dueDate}
                            defaultValue={task_dueDate}
                            type="date"
                            placeholder="Due Date"
                        />
                    
                        <select ref={priority} defaultValue={task_priority} className={`${!isEditable?'pointer-events-none':''} w-full h-full border border-gray-300 p-4 overflow-x-clip`}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    
                        <select ref={status} defaultValue={task_status} className={`${!isEditable?'pointer-events-none':''} w-full h-full border border-gray-300 p-4 overflow-x-clip ${task_status=="Completed"?"bg-green-500":"bg-orange-400"}`}>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    
                        <input
                            readOnly={!isEditable}
                            className="w-full h-full border border-gray-300 p-4 overflow-x-clip"
                            ref={assignTo}
                            type="text"
                            defaultValue={task_assignTo}
                        />
                        <div className="w-full h-full bg-gray-500 p-4 overflow-x-clip flex items-center">
                            <button onClick={handleEdit}>
                                <img className="w-6 h-6 hover:h-8 hover:w-8" src={!isEditable?"/src/assets/edit_task.png":"/src/assets/cancel_task.png"}/>
                            </button>
                            <button onClick={deleteTask} className="ml-2">
                                <img className="w-4 h-4 hover:h-8 hover:w-8" src='/src/assets/delete_task.png'/>
                            </button>
                            {isEditable &&<button className="ml-4 h-fit text-sm bg-orange-500 rounded-lg text-center p-2 hover:bg-orange-800">
                                update
                            </button>}
                        </div>
                        
                    </div>
                    
                        
                    
            </form>

    )
}

export default TaskCard;