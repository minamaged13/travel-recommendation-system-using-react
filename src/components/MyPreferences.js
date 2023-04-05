import { Fragment } from "react";
import { useSelector } from "react-redux";
import Preferences from "./Preferences";

const MyPreferences=()=>{
    const preferences= useSelector(state=>state.user.preferences);
    console.log("heloooo")
    console.log(preferences)
return<Fragment>
<Preferences restaurantsPreferences={preferences.restaurants} hotelsPreferences={preferences.hotels} attractionsPreferences={preferences.attractions}>

</Preferences>


</Fragment>
}
export default MyPreferences;