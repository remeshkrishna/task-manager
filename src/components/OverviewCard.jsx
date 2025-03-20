import { useDispatch } from "react-redux"
import { setActiveTaskCard } from "../store/taskSlice"
import { useNavigate } from "react-router-dom"

const OverviewCard=({cardTitle,NumTasks,icon})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const clickHandle=()=>{
      dispatch(setActiveTaskCard(cardTitle))
      navigate('/task')
    }
    return (
        <div onClick={clickHandle} className="bg-zinc-900 w-[30%] h-full rounded-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-white flex flex-col items-center justify-center overflow-hidden">
          <img className="mt-4 w-12" src={icon} alt="Pending Tasks"/>
          <p className="text-xl font-bold w-[80%] text-center">{cardTitle}</p>
          <p className="font-bold text-xl">{NumTasks}</p>
          <div className="flex justify-center items-center gap-2">
            <button className="text-xl font-semibold">More Details</button>
            <img className="w-6 shadow" src="src/assets/more_details.png" alt="More Details"/>
          </div>
        </div>

    )
}

export default OverviewCard