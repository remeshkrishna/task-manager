import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoginState } from "../store/userSlice";


const SideMenu = () => {

    const dispatch = useDispatch()
    const loginState = useSelector((store)=>store.user.loginState)
    const navigate = useNavigate()
    const handleLogout=()=>{
        dispatch(setLoginState(false))
        navigate('/')
    }
    return (
        <div className="bg-black min-w-24 w-[5%] h-screen flex flex-col  justify-between opacity-95">
            <div className="h-[50%] flex flex-col items-center space-y-4 pt-4">
                {/* App Logo */}
                <div className="relative group">
                    <button className="text-4xl w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center">
                        <img className="w-12 h-12" src="src/assets/app_logo.png" />
                    </button>
                    {/* Tooltip */}
                    {/* <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                        App Logo
                    </span> */}
                </div>

                {/* Expand Button */}
                <div className="relative group">
                    <button className="w-16 h-16 bg-gray-800 rounded-sm flex justify-center items-center">
                        <img src="src/assets/expand.png" />
                    </button>
                    <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                        Expand
                    </span>
                </div>

                {/* Dashboard Button */}
        
                    
                {loginState &&
                    (<Link to="/dashboard">
                    <div className="relative group">
                        <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
                            <img src="src/assets/dashboard.png" />
                        </button>
                        <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                            Dashboard
                        </span>
                    </div>
               </Link>) }

                
               {loginState &&
                    (<Link to="/task">
                    <div className="relative group">
                        <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
                            <img src="src/assets/add_task.png" />
                        </button>
                        <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:w-20">
                            Add Task
                        </span>
                    </div>
                </Link> )}
                

                {/* All tasks Button */}
                {loginState &&
                    (<Link to="/task">
                    <div className="relative group">
                        <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
                            <img src="src/assets/all_task_icon.png" />
                        </button>
                        <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:w-20">
                            All Tasks
                        </span>
                    </div>   
                </Link>)}
                

                {/* Settings Button */}
                {loginState &&
                    ( <div className="relative group">
                    <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
                        <img src="src/assets/settings.png" />
                    </button>
                    <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                        Settings
                    </span>
                </div>)}
                
                
            </div>

            {/* Logout Button */}
            {loginState &&
                    (<div className="relative group place-items-center">
                <button onClick={handleLogout} className="w-14 h-14 hover:bg-gray-800 rounded-sm flex justify-center items-center mb-4">
                    <img src="src/assets/logout.png" />
                </button>
                <span className="absolute bottom-full left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    Logout
                </span>
            </div> )}
        </div>



        // <div className="bg-black min-w-24 w-[5%] h-screen flex flex-col  justify-between opacity-95 md:w-full md:flex-row md:h-[5%]">
        //     <div className="h-[50%] items-center space-y-4 pt-4 md:flex md:gap-4" >
        //         {/* App Logo */}
        //         <div className="relative group">
        //             <button className="text-4xl w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center">
        //                 <img className="w-12 h-12" src="src/assets/app_logo.png" />
        //             </button>
        //             {/* Tooltip */}
        //             {/* <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        //                 App Logo
        //             </span> */}
        //         </div>

        //         {/* Expand Button */}
        //         <div className="relative group">
        //             <button className="w-16 h-16 bg-gray-800 rounded-sm flex justify-center items-center">
        //                 <img src="src/assets/expand.png" />
        //             </button>
        //             <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        //                 Expand
        //             </span>
        //         </div>

        //         {/* Dashboard Button */}
        
                    
        //         {loginState &&
        //             (<Link to="/dashboard">
        //             <div className="relative group">
        //                 <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
        //                     <img src="src/assets/dashboard.png" />
        //                 </button>
        //                 <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        //                     Dashboard
        //                 </span>
        //             </div>
        //        </Link>) }

                
        //        {loginState &&
        //             (<Link to="/task">
        //             <div className="relative group">
        //                 <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
        //                     <img src="src/assets/add_task.png" />
        //                 </button>
        //                 <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:w-20">
        //                     Add Task
        //                 </span>
        //             </div>
        //         </Link> )}
                

        //         {/* All tasks Button */}
        //         {loginState &&
        //             (<Link to="/task">
        //             <div className="relative group">
        //                 <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
        //                     <img src="src/assets/all_task_icon.png" />
        //                 </button>
        //                 <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:w-20">
        //                     All Tasks
        //                 </span>
        //             </div>   
        //         </Link>)}
                

        //         {/* Settings Button */}
        //         {loginState &&
        //             ( <div className="relative group">
        //             <button className="w-16 h-16 hover:bg-gray-800 rounded-sm flex justify-center items-center">
        //                 <img src="src/assets/settings.png" />
        //             </button>
        //             <span className="absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        //                 Settings
        //             </span>
        //         </div>)}
                
                
        //     </div>

        //     {/* Logout Button */}
        //     {loginState &&
        //             (<div className="relative group place-items-center  md:place-items-center">
        //         <button onClick={handleLogout} className="w-14 h-14 hover:bg-gray-800 rounded-sm flex justify-center items-center mb-4">
        //             <img src="src/assets/logout.png" />
        //         </button>
        //         <span className="absolute bottom-full left-full md:right-full md:top-full md:bottom-auto  ml-3 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ">
        //             Logout
        //         </span>
        //     </div> )}
        // </div>
    );
};

export default SideMenu;
