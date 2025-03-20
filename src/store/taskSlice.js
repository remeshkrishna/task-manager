import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name: "task",
    initialState:{
        taskList: null
    },
    reducers: {
        addTaskList: (state,action)=>{
            state.taskList = action.payload
        }
    }
})

export const {addTaskList} = taskSlice.actions
export default taskSlice.reducer