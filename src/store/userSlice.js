import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loginState: false
    },
    reducers:{
        setLoginState: (state,action)=>{
            state.loginState = action.payload
        }
    }
})

export const {setLoginState} = userSlice.actions
export default userSlice.reducer