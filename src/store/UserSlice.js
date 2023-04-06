import User from "@/models/User";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userID: 0,
  isLoggedin: true,
  info: {},
  preferences: {
    hotels: [],
    restaurants: [],
    attractions: [],
  },
};
const UserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedin = true;
      state.userID = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
      state.country = action.payload.country;
    },
setUserId(state,action){
state.userID= action.payload.id;
},
    logout(state) {
      state.userID = 0;
      state.info = {};
      state.preferences = {
        hotels: [],
        restaurants: [],
        attractions: [],
      };
      state.isLoggedin = false;
    },
   
  },
});
export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
