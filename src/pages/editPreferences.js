import { Fragment } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserActions } from "@/store/UserSlice";
import { useRouter } from "next/router";
const editPreferences = () => {
  const restaurantCuisinesLikes = useSelector((state)=> state.user.restaurantCuisinesLikes);
  // console.log("restaurantCuisinesLikes")
  // console.log(restaurantCuisinesLikes)
  const hotelPreferencesLikes = useSelector((state)=> state.user.hotelPreferencesLikes);
  const attractionPreferencesLikes = useSelector((state)=> state.user.attractionPreferencesLikes);
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const [next, setNext] = useState(0);
  const dispatch = useDispatch();
  const nextHandler = () => {
    setNext((prev) => (prev = prev + 1));
  };
  const backhandler = () => {
    setNext((prev) => (prev = prev - 1));
  };
///////////////////////////////////////////////////////////////////////////////////////
  //hotel aminities
  const hotelAminities = [
    { id: "1", text: "Restaurant" },
    { id: "2", text: "Air conditioning" },
    { id: "3", text: "Laundry service" },
    { id: "4", text: "Non-smoking rooms" },
    { id: "5", text: "24-hour front desk" },
    { id: "6", text: "Bar / lounge" },
    { id: "7", text: "Family room" },
    { id: "8", text: "Safe" },
    { id: "9", text: "Wifi" },
    { id: "10", text: "Pool" },
    { id: "11", text: "Dry cleaning" },
    { id: "12", text: "Concierge" },
    { id: "13", text: "Children Activities" },
    { id: "14", text: "Airport transportations" },
    { id: "15", text: "Room Service" },
  ];
 
  const [choosenAminities, setChoosenAminities] = useState([
    ...restaurantCuisinesLikes
  ]);
  console.log(choosenAminities);
  const validAminities = choosenAminities.length > 4 ? true : false;
  const hotelClickHandler = (event) => {
    if (!choosenAminities.includes(event.target.id)) {
      setChoosenAminities((prev) => [...prev, event.target.id]);
    } else {
      setChoosenAminities(
        choosenAminities.filter((item) => item !== event.target.id)
      );
    }
    console.log(event.target.id);
    console.log(choosenAminities);
  };
  const clearAminities = () => {
    setChoosenAminities([]);
  };
  /////////////////////////////////////////////////////////////////
  /////restaurants
  const cuisine_types = [
    { id: "1", text: "Mediterranean" },
    { id: "2", text: "Egyptian" },
    { id: "3", text: "Italian" },
    { id: "4", text: "Seafood" },
    { id: "5", text: "Middle Eastern" },
    { id: "6", text: "European" },
    { id: "7", text: "American" },
    { id: "8", text: "Vegetarian Friendly" },
    { id: "9", text: "Lebanese" },
    { id: "10", text: "Barbecue" },
    { id: "11", text: "Japanese" },
    { id: "12", text: "Healthy" },
    { id: "13", text: "Steakhouse" },
    { id: "14", text: "French" },
    { id: "15", text: "International" },
  ];
  const [choosenCusines, setChoosenCusines] = useState([...hotelPreferencesLikes]);
  const validCausines = choosenCusines.length > 4 ? true : false;
  const restaurantClickHandler = (event) => {
    if (!choosenCusines.includes(event.target.id)) {
      setChoosenCusines((prev) => [...prev, event.target.id]);
    } else {
      setChoosenCusines(
        choosenCusines.filter((item) => item !== event.target.id)
      );
    }
    console.log(event.target.id);
    console.log(choosenCusines);
  };
  const clearCusines = () => {
    setChoosenCusines([]);
  };

  /////attractions
  const attractions = [
    { id: "1", text: "Museum" },
    { id: "2", text: "Park" },
    { id: "3", text: "Historical landmark" },
    { id: "4", text: "Beach" },
    { id: "5", text: "Garden" },
    { id: "6", text: "Art Gallery" },
    { id: "7", text: "Palace" },
    { id: "8", text: "Mosque" },
    { id: "9", text: "Church" },
    { id: "10", text: "Shopping mall" },
    { id: "11", text: "Temple" },
    { id: "12", text: "bazar" },
    { id: "13", text: "island" },
    { id: "14", text: "Zoo" },
    { id: "15", text: "Library" },
  ];
  
  const [choosenAttractions, setChoosenAttractions] =
    useState([...attractionPreferencesLikes]);
  const validAttractions = choosenAttractions.length > 4 ? true : false;
  const attractionsClickHandler = (event) => {
    if (!choosenAttractions.includes(event.target.id)) {
      setChoosenAttractions((prev) => [...prev, event.target.id]);
    } else {
      setChoosenAttractions(
        choosenAttractions.filter((item) => item !== event.target.id)
      );
    }
    console.log(event.target.id);
    console.log(choosenAttractions);
  };
  const clearAttractions = () => {
    setChoosenAttractions([]);
  };
  ////////
  async function submitHandler() {
    //     console.log("user id edd: ",userId);
    //     console.log("Chosen Aminties: ",choosenAminities);
    //     console.log("Chosen Cusines: ",choosenCusines);
    //     console.log("Chosen Attractions: ",choosenAttractions);
    //     const response = await fetch(
    //       `http://127.0.0.1:4000/users/preferences/${userId}`,
    //       {
    //         // const response = await  fetch (`http://127.0.0.1:4000/users/${userId}/restaurants/cuisines`, {
    //         method: "PUT",
    //         headers: {
    //           "Content-Type": "application/json",
    //           // 'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify({
    //           restaurantCuisinesLikes: choosenCusines,
    //           hotelPreferencesLikes: choosenAminities,
    //           attractionPreferencesLikes: choosenAttractions,
    //         }),
    //       }
    //     );
    //     console.log("response: ", response);
    //     if (response.status === 200) {
    //       console.log("response.ok");
    //       const data = await response.json();
    //       console.log("Data: ", data);
    //       dispatch(
    //         UserActions.logIn({
    //           id: data.id,
    //           firstName: data.firstName,
    //           secondName: data.secondName,
    //           email: data.email,
    //           country: data.country,
    //           hotelPreferencesLikes: data.hotelPreferencesLikes,
    //           restaurantCuisinesLikes: data.restaurantCuisinesLikes,
    //           attractionPreferencesLikes: data.attractionPreferencesLikes,
    //         })
    //       );
    //       console.log("Success in preferences :", data.id);
    //       // console.log ('UserID: ', userIDState);
    //     } else {
    //       console.error("Error:", response.status);
    //     }
        router.replace("/");
  }
  return (
    <Fragment>
      <div className="capitalize flex flex-col justify-center items-center  ">
        {next === 0 && (
          <div className="shadow-lg rounded-xl p-16 mt-3  ">
            <h1 className="text-3xl text-center  mb-10">
              choose 5 hotel aminities or more
            </h1>
            <div className="grid grid-cols-3 grid-rows-5 gap-4  text-black ">
              {hotelAminities.map((item) => (
                <button
                  className={`${
                    choosenAminities.includes(item.id)
                      ? "bg-gray-300 "
                      : "bg-transparent"
                  } text-xl  rounded-xl h-18  w-32 p-2 shadow-md hover:shadow-xl transition duration-300 ease-in-out`}
                  id={item.id}
                  onClick={hotelClickHandler}
                >
                  {item.text}
                </button>
              ))}
            </div>
            <button
              onClick={clearAminities}
              className="text-2xl  w-20 rounded-xl  bg-red-500 text-center h-8 mt-6 "
            >
              clear
            </button>
            <button
              disabled={!validAminities}
              onClick={nextHandler}
              className=" disabled:cursor-not-allowed  disabled:bg-gray-400 text-3xl mt-4 border border-3 rounded-2xl bg-blue-500 content-center h-16 w-36  ml-20"
            >
              {" "}
              next{" "}
            </button>
          </div>
        )}
        {/* restaurants */}
        {next === 1 && (
          <div className="shadow-lg rounded-xl p-16 mt-3  ">
            <h1 className="text-3xl text-center mt-10 mb-10">
              choose 5 cuisine types or more
            </h1>
            <div className="grid grid-cols-3 grid-rows-5 gap-4  text-black ">
              {cuisine_types.map((item) => (
                <button
                  className={`${
                    choosenCusines.includes(item.id)
                      ? "bg-gray-300 "
                      : "bg-transparent"
                  } text-xl  rounded-xl  h-18  w-32 p-2  shadow-md hover:shadow-xl transition duration-300 ease-in-out`}
                  id={item.id}
                  onClick={restaurantClickHandler}
                >
                  {item.text}
                </button>
              ))}
            </div>
            <button
              onClick={clearCusines}
              className="text-2xl  w-20 rounded-xl  bg-red-500 text-center h-8 mt-6 "
            >
              clear
            </button>
            <button
              onClick={nextHandler}
              disabled={!validCausines}
              className="text-3xl disabled:cursor-not-allowed  disabled:bg-gray-400  mt-4 border border-3 rounded-2xl bg-blue-500 content-center h-16 w-36  ml-20"
            >
              {" "}
              next{" "}
            </button>
            <button
              onClick={backhandler}
              className="text-2xl  w-20 rounded-xl  bg-yellow-500 text-center h-8 mt-6 ml-16"
            >
              Back{" "}
            </button>
          </div>
        )}

        {/* attractions */}
        {next === 2 && (
          <div className="shadow-lg rounded-xl p-16 mt-3  ">
            <h1 className="text-3xl text-center mt-10 mb-10">
              choose 5 attractions types or more
            </h1>
            <div className="grid grid-cols-3 grid-rows-5 gap-4  text-black ">
              {attractions.map((item) => (
                <button
                  className={`${
                    choosenAttractions.includes(item.id)
                      ? "bg-gray-300 "
                      : "bg-transparent"
                  } text-xl  rounded-xl  h-18  w-32 p-2  shadow-md hover:shadow-xl transition duration-300 ease-in-out`}
                  id={item.id}
                  onClick={attractionsClickHandler}
                >
                  {item.text}
                </button>
              ))}
            </div>
            <button
              onClick={clearAttractions}
              className="text-2xl  w-20 rounded-xl  bg-red-500 text-center h-8 mt-6 "
            >
              clear
            </button>
            <button
              onClick={submitHandler}
              disabled={!validAttractions}
              className=" disabled:cursor-not-allowed  disabled:bg-gray-400    text-3xl mt-4 border border-3 rounded-2xl bg-blue-500 content-center h-16 w-36  ml-20"
            >
              {" "}
              Update{" "}
            </button>
            <button
              onClick={backhandler}
              className="text-2xl  w-20 rounded-xl  bg-yellow-500 text-center h-8 mt-6 ml-16"
            >
              Back{" "}
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default editPreferences;