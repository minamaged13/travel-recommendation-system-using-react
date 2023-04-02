import User from "@/models/User";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { userID: 2, isLoggedin:true  };
const UserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: { logIn(state,action) {
    state.userID= action.payload
  },
logout(state){
    state.userID= 0;
} },
});
export const UserActions= UserSlice.actions;
export default UserSlice.reducer;
