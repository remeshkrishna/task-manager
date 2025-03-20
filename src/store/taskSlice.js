import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name: "task",
    initialState:{
        taskList: null,
        activeTaskCard: null
    },
    reducers: {
        addTaskList: (state,action)=>{
            state.taskList = action.payload
        },
        setActiveTaskCard: (state,action)=>{
            state.activeTaskCard = action.payload
        }
    }
})

export const {addTaskList,setActiveTaskCard} = taskSlice.actions
export default taskSlice.reducer