import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoginState } from "../store/userSlice";
import { setActiveTaskCard } from "../store/taskSlice";

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch()
  const loginState = useSelector((store)=>store.user.loginState)
  const navigate = useNavigate()
  const handleLogout=()=>{
      dispatch(setLoginState(false))
      navigate('/')
  }

  return (
    <div className={`bg-gray-900 text-white p-4 h-screen transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
            <ul>
                
                <li className="p-2">
                    <button >
                        <img src="src/assets/app_logo.png" />
                    </button>
                </li>
                {loginState &&<li className="p-2 hover:bg-gray-700 rounded">
                    <button onClick={() => setCollapsed(!collapsed)} className="w-full justify-items-end">
                      {collapsed ?<img src="src/assets/right_expand.png" />: <img className="w-12 h-12" src="src/assets/left_collapse.png" />}
                    </button>
                </li>}

                {loginState &&
                    (<Link to="/dashboard">
                      <li className={"p-2 hover:bg-gray-700 rounded"}>
                        <button className={!collapsed ? "flex place-items-center text-xl gap-2":""}>
                            <img src="src/assets/dashboard.png" />
                            {!collapsed && <p>Dashboard</p>}
                        </button>
                      </li>
               </Link>) }

               {loginState &&
                    (<Link to="/dashboard">

                      </Link>) }

                {loginState &&
                    (<Link to="/addtask">
                        <li className="p-2 hover:bg-gray-700 rounded">
                          <button className={!collapsed ?"flex place-items-center text-xl gap-2":""}>
                            <img src="src/assets/add_task.png" />
                            {!collapsed && <p>Add Task</p>}
                          </button>
                        </li>
                    </Link>) }
                
                {loginState &&
                    (<Link to="/task">
                        <li className="p-2 hover:bg-gray-700 rounded">
                          <button  onClick={()=>{dispatch(setActiveTaskCard(null))}} className={!collapsed ?"flex place-items-center text-xl gap-2":""}>
                            <img className={!collapsed ?"w-12 h-12":""} src="src/assets/all_task_icon.png" />
                            {!collapsed && <p>View Tasks</p>}
                          </button>
                      </li>
                    </Link>) }

                {loginState &&
                    (<Link to="/settings">
                        <li className="p-2 hover:bg-gray-700 rounded">
                          <button className={!collapsed ?"flex place-items-center text-xl gap-2":""}>
                            <img src="src/assets/settings.png" />
                            {!collapsed && <p>Settings</p>}
                          </button>
                        </li>
                    </Link>) }
            </ul>
            {loginState && <li className="p-2 hover:bg-gray-700 rounded list-none">
              <button onClick={handleLogout} className={!collapsed ? "flex place-items-center text-xl gap-2 ":""}>
                      <img className={!collapsed ?"w-12 h-12":""} src="src/assets/logout.png" />
                      {!collapsed && <p>Logout</p>}
              </button>
            </li>}
            
    </div>
  );
};

export default SideMenu;