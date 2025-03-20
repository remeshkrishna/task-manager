import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import taskReducer from "./taskSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        task: taskReducer,
    }
})

export default appStore