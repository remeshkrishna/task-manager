const OverviewCard=({cardTitle,NumTasks,icon})=>{
    return (
        // <div className="bg-blue-200 w-[70%] h-[80%] mx-[15%] my-[10%] rounded-lg hover:scale-105 hover:shadow-2xl hover:bg-red-200 transition">
        //     <div className="grid grid-rows-3 gap-2 place-items-center">
        //         <img className="mt-2" src="src/assets/pending_tasks.png"/>
        //         <p className="text-4xl font-bold ">{cardTitle}</p>
        //         <p className="font-bold text-2xl">{NumTasks}</p>
        //         <button className="text-2xl flex place-items-center"> More Details<img className="w-10" src="src/assets/more_details.png"/></button>
        //     </div>

        // </div>
        <div className="bg-gray-600 w-[80%] h-full m-auto  rounded-lg 
            hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-white items-center">
    
    <div className="w-full m-auto grid grid-rows-4 gap-6 place-items-center h-full">
        <img className="mt-4 w-16" src={icon} alt="Pending Tasks"/>
        <p className="text-2xl font-bold w-[80%] text-center">{cardTitle}</p>
        <p className="font-bold text-2xl">{NumTasks} Tasks</p>
        <div className="flex justify-center items-center gap-2">
            <button className="text-2xl font-semibold">More Details</button>
            <img className="w-8 shadow" src="src/assets/more_details.png" alt="More Details"/>
        </div>
    </div>

</div>

    )
}

export default OverviewCard