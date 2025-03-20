import UserActivity from "./UserActivity"

const RecentActivitiesOverview = ()=>{
    return (

        <div className="bg-zinc-900 w-[30%] h-full rounded-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-white p-4 overflow-hidden flex flex-col">
          <h2 className="text-xl font-bold sticky top-0 bg-zinc-900 p-2 z-10">Recent Activities</h2>
          <div className="w-full h-full overflow-y-auto">
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