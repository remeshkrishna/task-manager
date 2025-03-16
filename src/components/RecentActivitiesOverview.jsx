import UserActivity from "./UserActivity"

const RecentActivitiesOverview = ()=>{
    return (

        <div className="w-[80%] h-full m-auto bg-gray-600 rounded-lg shadow-md p-4 text-white hover:scale-105 transition duration-300">
        {/* Fixed Header */}
        <h2 className="text-xl font-bold mb-2 sticky top-0 bg-gray-600  p-2 z-10">Recent Activities</h2>
  
        {/* Scrollable List */}
        <div className="h-80 overflow-y-auto space-y-2">
            <ul>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
                <li><UserActivity/></li>
            </ul>
        </div>
</div>
    )
}

export default RecentActivitiesOverview