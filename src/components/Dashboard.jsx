import OverviewCard from "./OverviewCard"
import RecentActivitiesOverview from "./RecentActivitiesOverview"
import ProgressSection from "./ProgressSection"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Dashboard=()=>{
    const taskList = useSelector((store)=>store.task.taskList)
    const pending_tasks = taskList?.filter((item)=>item.status === "Pending")
    const completed_tasks = taskList?.filter((item)=>item.status === "Completed")
    const inprogress_tasks = taskList?.filter((item)=>item.status === "In Progress")
    const loginState = useSelector((store)=>store.user.loginState)
    const navigate = useNavigate()
    useEffect(()=>{
      if(!loginState){
        navigate('/')
      }
    },[])
    if(!loginState) return
    return(
        <div className="flex flex-col gap-6 p-6 bg-gray-200 min-h-screen w-full h-screen overflow-auto">
      <div className="flex gap-16 justify-center w-full flex-1 h-[33vh]">
          <OverviewCard cardTitle="TOTAL TASKS" NumTasks={taskList?.length || 0} icon="src/assets/total_tasks.png"/>
          <OverviewCard cardTitle="COMPLETED TASKS" NumTasks={completed_tasks?.length || 0} icon="src/assets/completed_tasks_green.png"/>
          <OverviewCard cardTitle="PENDING TASKS" NumTasks={pending_tasks?.length || 0} icon="src/assets/pending_tasks.png" />
      </div>
      <div className="flex gap-16 justify-center w-full flex-1 h-[33vh]">
        <OverviewCard  cardTitle="IN-PROGRESS TASKS" NumTasks={inprogress_tasks?.length || 0} icon="src/assets/pending_tasks.png" />
        <ProgressSection/>
        <RecentActivitiesOverview/>
      </div>
      <div className="flex gap-16 justify-center w-full flex-1 h-[33vh]">
        <div className="bg-zinc-900 w-[30%] h-[33vh] rounded-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-white flex items-center justify-center overflow-hidden">Box 7</div>
        <div className="bg-zinc-900 w-[30%] h-[33vh] rounded-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-white flex items-center justify-center overflow-hidden">Box 8</div>
        <div className="bg-zinc-900 w-[30%] h-[33vh] rounded-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-white flex items-center justify-center overflow-hidden">Box 9</div>
      </div>
    </div>
    )
}

export default Dashboard