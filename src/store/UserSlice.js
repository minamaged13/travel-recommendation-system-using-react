import User from '@/models/User';
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  id: 3,
  firstName: '',
  secondName: '',
  email: '',
  nationality:'',
  restaurantCuisinesLikes:[],
  hotelPreferencesLikes:[ { id: "8", text: "Safe" },
  { id: "9", text: "Wifi" },
  { id: "10", text: "Pool" },],
  attractionPreferencesLikes:[],
  isLoggedin: true,
  // isLoggedin: false,

  // info: {},
  // preferences: {
  //   hotels: [],
  //   restaurants: [],
  //   attractions: [],
  // },
};
const UserSlice = createSlice ({
  name: 'user',
  initialState: initialState,
  reducers: {
    // updateObject: (state, action) => {
    //   state.myObject = action.payload;
    // },
    editUserInfo(state,action){
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
    },
    editUserPref(state,action){
      state.hotelPreferencesLikes=action.payload.hotelPreferencesLikes;
      state.restaurantCuisinesLikes=action.payload.restaurantCuisinesLikes;
      state.attractionPreferencesLikes=action.payload.attractionPreferencesLikes; 
      
    },
    logIn (state, action) {
      console.log("USer slice logIn")
      state.isLoggedin = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
      state.hotelPreferencesLikes=action.payload.hotelPreferencesLikes;
      state.restaurantCuisinesLikes=action.payload.restaurantCuisinesLikes;
      state.attractionPreferencesLikes=action.payload.attractionPreferencesLikes; 
      state.nationality=action.payload.nationality;
      // state.country=action.payload.country;
    },
    // setUserId (state, action) {
    //   state.userID = action.payload.idOfUser;
    // },
    logout (state) {
      // state.userID = 0;
      // state.info = {};
      // state.preferences = {
      //   hotels: [],
      //   restaurants: [],
      //   attractions: [],
      // };
      state.isLoggedin = false;
    },
  },
});
export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
