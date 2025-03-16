import OverviewCard from "./OverviewCard"
import RecentActivitiesOverview from "./RecentActivitiesOverview"
import ProgressSection from "./ProgressSection"

const Dashboard=()=>{
    return(
        <div className="grid grid-rows-3 gap-20  bg-black w-full h-screen p-4">
            <div className="w-full grid grid-cols-3 gap-4 m-auto ">
                <OverviewCard  cardTitle="TOTAL TASKS" NumTasks={120} icon="src/assets/total_tasks.png"/>
                <OverviewCard  cardTitle="COMPLETED TASKS" NumTasks={120} icon="src/assets/completed_tasks_green.png"/>
                <OverviewCard  cardTitle="PENDING TASKS" NumTasks={120} icon="src/assets/pending_tasks.png" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <RecentActivitiesOverview/>
                <ProgressSection/>
            </div>
            <div></div>
        </div>
    )
}

export default Dashboard