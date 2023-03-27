import { Fragment } from "react";
import Button from "./Button";
import { useState } from "react";
const Preferences = () => {
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
    { id: "15", text: "Room Service" }

  
  ];
  const [choosenAminities, setChoosenAminities] = useState([]);
  const hotelClickHandler = (event) => {
    if (!choosenAminities.includes(event.target.id)) {
      setChoosenAminities((prev) => [...prev, event.target.id]);
    } else {
      setChoosenAminities(
        choosenAminities.filter((item) => item !== event.target.id)
      );
    }
    console.log(event.target.id)
    console.log(choosenAminities);
  };
  const clearAminities = () => {
    setChoosenAminities([]);
  };
  /////attractions
  const attractionTypes = [
    "Museum",
    "Park",
    "Historical landmark",
    "Beach",
    "Garden",
    "Art Gallery",
    "Palace",
    "Mosque",
    "Church",
    "Shopping mall",
    "Temple",
    "Bazar",
    "island",
    "Zoo",
    "Library",
  ];
  return (
    <Fragment>
      <div className="capitalize flex flex-col justify-center items-center  ">
        <div className="shadow-lg rounded-xl p-20 mt-10 ">
          <h1 className="text-3xl text-center mt-10 mb-10">
            choose 5 hotel aminities or more
          </h1>
          <div className="grid grid-cols-3 grid-rows-5 gap-4  text-black ">
            {hotelAminities.map((item) => (
              <button
                className={`${
                  choosenAminities.includes(item.id)
                    ? "bg-gray-300 "
                    : "bg-transparent"
                } text-xl  rounded-xl h-20  w-36 p-2 shadow-md hover:shadow-xl transition duration-300 ease-in-out`}
                id={item.id}
                onClick={hotelClickHandler}
              >
                {item.text}
              </button>
            ))}
          </div>
          <button
            onClick={clearAminities}
            className="text-2xl border border-3 w-36 rounded-2xl  bg-blue-500 text-center h-16 mt-16 hover:bg-red-500"
          >
            clear
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Preferences;
