import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loginState: false,
        token: null,
        user: null
    },
    reducers:{
        setLoginState: (state,action)=>{
            state.loginState = action.payload
        },
        setToken: (state,action)=>{
            state.token = action.payload
        },
        setUser: (state,action)=>{
            state.user = action.payload
        }
    }
})

export const {setLoginState,setToken,setUser} = userSlice.actions
export default userSlice.reducer