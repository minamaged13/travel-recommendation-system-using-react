import { Fragment } from "react";
import { useSelector } from "react-redux";
import Preferences from "./Preferences";

const MyPreferences = () => {
  const preferences = useSelector((state) => state.user.preferences);

  return (
    <Fragment className="">
      <div className=" bg-gray-50 grid grid-cols-3 gap-y-12 capitalize p-24 pt-10 shadow-xl rounded-2xl m-16 mt-5 mb-5">
        <ul className=" text-center ">
          <label className="text-3xl  rounded-lg p-3 w-60 ">
            hotel aminities
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          </label>
          {preferences.hotels.map((item) => (
            <li className="pl-2 text-xl mt-4 ">{item.text}</li>
          ))}
        </ul>
        <ul className="text-center  ">
          <label className="text-3xl  rounded-lg p-3 w-auto">
            restaurants cuisines
          </label>
          {preferences.restaurants.map((item) => (
            <li className="pl-2 text-xl mt-4 ">{item.text}</li>
          ))}
        </ul>
        <ul className=" text-center ">
          <label className="text-3xl 0 rounded-lg p-3 w-42">
            attractions
          </label>
          {preferences.attractions.map((item) => (
            <li className="pl-2 text-xl mt-4 ">{item.text}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-10  ">
        <button className="text-3xl p-5 bg-red-500 rounded-2xl hover:shadow-2xl">change</button>
      </div>
      {false && (
        <Preferences
          restaurantsPreferences={preferences.restaurants}
          hotelsPreferences={preferences.hotels}
          attractionsPreferences={preferences.attractions}
        ></Preferences>
      )}
    </Fragment>
  );
};
export default MyPreferences;
