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