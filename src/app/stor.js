import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../Features/SignSlice"
import catReducer from '../Features/CatogrySlice'
import viewReducer from '../Features/ProductSlice'
export const stor = configureStore({
    reducer: {
        auth:signReducer,
        catgory:catReducer,
        product:viewReducer
    }
})