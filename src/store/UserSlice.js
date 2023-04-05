import User from '@/models/User';
import {createSlice} from '@reduxjs/toolkit';
const initialState = {userID: 2, isLoggedin: false,info:{firstName:" mina ",secondName:"maurice", email:"mina@test.com",country:"spain"},preferences: {hotels:[],restaurants:[],attractions:[]} };
const UserSlice = createSlice ({
  name: 'currentUser',
  initialState,
  reducers: {
    logIn (state, action) {
      state.isLoggedin = true;
      state.userID = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
      state.country=action.payload.country
    },

    logout (state) {
      state.userID = 0;
    },
    // loggedIn (state) {
    //   state.isLoggedin = true;
    // },
  },
});
export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
