import { useRef } from "react"
import { useSelector } from "react-redux"
import { addTaskList } from "../store/taskSlice"
import { useDispatch } from "react-redux"

const AddTask = ()=>{
    const dispatch = useDispatch()
    const user = useSelector((store)=>store.user.user)
    const [name,desc,dueDate,priority,status, assignTo] = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]
    const token = useSelector((store)=>store.user.token)

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
    
    const handleAddTask = async()=>{
        const data = await fetch('http://127.0.0.1:8000/tasks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name.current.value,
                "description": desc.current.value,
                "due_date": dueDate.current.value,
                "priority": priority.current.value,
                "status": status.current.value,
                "assigned_to": assignTo.current.value,
                "user_id":user.id
              })
        })
        console.log(await data.json())
        await fetchTaskList(token)
    }
    return(
        <div className="grid bg-black w-full h-screen p-4 place-items-center">
            <form onSubmit={(e)=>e.preventDefault()} className="h-2/3 w-4/12  bg-gray-500 rounded-2xl">
                <div className="flex flex-col w-full max-w-full h-full max-h-full justify-center items-center gap-4">
                    <h1 className="text-4xl font-bold mb-4">ADD TASK</h1>
                    <div className="flex w-full  px-6 justify-between items-center font-bold">
                        <label >Task Name</label>
                        <input
                            ref={name}
                            className="w-[80%] h-full p-4 rounded-2xl bg-gray-100 text-black shadow-xl border-l-2"
                            type="text" 
                            placeholder="Task Name"
                        />
                    </div>
                    <div className="flex w-full px-6 justify-between items-center font-bold">
                    <label>Description</label>
                        <textarea
                            ref={desc}
                            className="w-[80%] p-4 rounded-2xl bg-gray-100 text-black shadow-xl border-l-2 rounded-br-none"
                            placeholder="Description"
                        ></textarea>
                    </div>
                    <div className="flex w-full px-6 justify-between items-center font-bold">
                        <label>Due date</label>
                        <input
                            ref={dueDate}
                            className="w-[80%] p-4 rounded-2xl bg-gray-100 text-black shadow-xl border-l-2"
                            type="date" 
                            placeholder="Due Date"
                        />
                    </div>
                    <div className="flex w-full px-6 justify-between items-center font-bold">
                        <label>Priority</label>
                        <select ref={priority} className="w-[80%] p-4 rounded-2xl bg-gray-100 text-black shadow-xl border-l-2">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="flex w-full px-6 justify-between items-center font-bold">
                        <label>Status</label>
                        <select ref={status} className="w-[80%] p-4 rounded-2xl bg-gray-100 text-black shadow-xl border-l-2">
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div className="flex w-full px-6 justify-between items-center font-bold">
                        <label>Assigned To</label>
                        <input
                            ref={assignTo}
                            className="w-[80%] p-4 rounded-2xl bg-gray-100 text-black shadow-xl border-l-2"
                            type="text" 
                            placeholder="Assigned to user"
                        />
                    </div>
                    <button onClick={handleAddTask} className="w-[50%] p-4 rounded-2xl bg-blue-400 text-white overflow-hidden hover:cursor-pointer">➕Add Task</button>
                </div>
            </form>

        </div>
    )
}

export default AddTask