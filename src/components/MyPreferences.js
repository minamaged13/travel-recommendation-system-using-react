import { Fragment } from "react";
import { useSelector } from "react-redux";
import Preferences from "./Preferences";

const MyPreferences = () => {
  // const preferences = useSelector((state) => state.user.preferences);
  const restaurantCuisinesLikes = useSelector((state)=> state.user.restaurantCuisinesLikes);
  const hotelPreferencesLikes = useSelector((state)=> state.user.hotelPreferencesLikes);
  const attractionPreferencesLikes = useSelector((state)=> state.user.attractionPreferencesLikes);

  return (
    <Fragment className="">
      <div className=" p-24 pt-10 shadow-xl rounded-2xl m-16 mt-10 mb-5 mr-20 ml-96">
      <div className="  grid grid-cols-3 gap-y-12 capitalize">
        <ul className=" text-center ">
          <label className="text-3xl  rounded-lg p-3 w-60 ">
            hotel aminities
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          </label>
          {hotelPreferencesLikes.map((item) => (
            <li className="pl-2 text-xl mt-4 ">{item.text}</li>
          ))}
        </ul>
        <ul className="text-center  ">
          <label className="text-3xl  rounded-lg p-3 w-auto">
            restaurants cuisines
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          </label>
          {restaurantCuisinesLikes.map((item) => (
            <li className="pl-2 text-xl mt-4 ">{item.text}</li>
          ))}
        </ul>
        <ul className=" text-center ">
          <label className="text-3xl 0 rounded-lg p-3 w-42">
            attractions
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          </label>
          {attractionPreferencesLikes.map((item) => (
            <li className="pl-2 text-xl mt-4 ">{item.text}</li>
          ))}
        </ul>
        </div>
        <div className="flex justify-center  ">
        <button className="text-2xl p-4 px-10 bg-blue-400 rounded-2xl hover:shadow-2xl mt-20">Edit</button>
      </div>

      </div>
   
      {false && (
        <Preferences
          // restaurantsPreferences={preferences.restaurants}
          // hotelsPreferences={preferences.hotels}
          // attractionsPreferences={preferences.attractions}
          restaurantsPreferences={restaurantCuisinesLikes}
          hotelsPreferences={hotelPreferencesLikes}
          attractionsPreferences={attractionPreferencesLikes}
        ></Preferences>
      )}
    </Fragment>
  );
};
export default MyPreferences;
