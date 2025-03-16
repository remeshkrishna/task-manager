import { Router, Route } from "react-router-dom";
import AddTask from "./AddTask";
import OverviewCard from "./OverviewCard";
import ProgressSection from "./ProgressSection";
import RecentActivitiesOverview from "./RecentActivitiesOverview";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";

const MainScreen=()=>{

    const loginState = useSelector((store)=>store.user.loginState)
    return(
        <>
            {!loginState && <Login/>}
            {loginState && <Dashboard/>}
        </>
        
    )
}

export default MainScreen;