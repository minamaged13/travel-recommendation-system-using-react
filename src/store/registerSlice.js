import { createSlice } from "@reduxjs/toolkit";
const initialState={toggle:false}
const registerSlice =createSlice({
    name:'register',
    initialState,
    reducers:{
        toggle(state){
            state.toggle=!state.toggle;
        },

    }
})

export const registerActions = registerSlice.actions;

export default registerSlice.reducer;


