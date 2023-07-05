import User from "@/models/User";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: 12,
  firstName: "",
  secondName: "",
  email: "",
  nationality: "",
  restaurantCuisinesLikes: [
    // { id: "2", text: "Egyptian" },
    // { id: "3", text: "Italian" },
    // { id: "10", text: "Barbecue" },
    // { id: "8", text: "Vegetarian Friendly" },
    // { id: "5", text: "Middle Eastern" },
    // { id: "12", text: "Healthy" },
    // { id: "13", text: "Steakhouse" },
  ],
  hotelPreferencesLikes: [
    // { id: "8", text: "Safe" },
    // { id: "9", text: "Wifi" },
    // { id: "10", text: "Pool" },
    // { id: "2", text: "Air conditioning" },
    // { id: "13", text: "Children Activities" },
    // { id: "11", text: "Dry cleaning" },
    // { id: "4", text: "Non-smoking rooms" }
  ],
  attractionPreferencesLikes: [
    
    // { id: "3", text: "Historical landmark" },
    // { id: "4", text: "Beach" },
    // { id: "11", text: "Temple" },
    // { id: "1", text: "Museum" },
    // { id: "6", text: "Art Gallery" },
  
  ],
  isLoggedin: true,
  // isLoggedin: false,

};
const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // updateObject: (state, action) => {
    //   state.myObject = action.payload;
    // },
    editUserInfo(state, action) {
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
    },
    editUserPref(state, action) {
      state.hotelPreferencesLikes = action.payload.hotelPreferencesLikes;
      state.restaurantCuisinesLikes = action.payload.restaurantCuisinesLikes;
      state.attractionPreferencesLikes =
        action.payload.attractionPreferencesLikes;
    },
    logIn(state, action) {
      console.log("USer slice logIn");
      state.isLoggedin = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
      state.hotelPreferencesLikes = action.payload.hotelPreferencesLikes;
      state.restaurantCuisinesLikes = action.payload.restaurantCuisinesLikes;
      state.attractionPreferencesLikes =
        action.payload.attractionPreferencesLikes;
      state.nationality = action.payload.nationality;
      // state.country=action.payload.country;
    },
    // setUserId (state, action) {
    //   state.userID = action.payload.idOfUser;
    // },
    logout(state) {
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
