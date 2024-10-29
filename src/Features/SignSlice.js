import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const signSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        show : (state) => { 
            return true; // State will be true
         },
         close : (state) => {
            return false; // State will be false
         } 
    }
})
export const {show,close} = signSlice.actions
export default signSlice.reducer