import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:[],
    item:{}
}
export const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addItem:(state,action) => {
            state.items=[]
            const [start,end] = action.payload;
            console.log(action.payload)
            
            console.log(start,end);
            console.log(start)
            state.items.push(start,end)
           
            console.log(state.items)
        }
    }
})
export const {addItem} = ProductSlice.actions
export default ProductSlice.reducer