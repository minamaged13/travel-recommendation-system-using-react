import GetLocation from "@/components/GetLocation";
import PlanDisplay from "@/components/PlanDisplay";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const plan = () => {
  const userID = useSelector((state) => state.user.id);
  const [togglePanel, setTogglePanel] = useState(false);
  const [planData, setPlanData] = useState([{},{}]);
  const [selectedCity, setSelectedCity] = useState("cairo");
  const [noOfDays, setNoOfDays] = useState(1);
  const [startTime, setStartTime] = useState("6AM");
  const [endTime, setEndTime] = useState("4PM");
  const noOfDaysHandler = (event) => {
    setNoOfDays(event.target.value);
  };
  const selectedCityHandler = (event) => {
    setSelectedCity(event.target.value);
  };
  const startTimeHandler = (event) => {
    setStartTime(event.target.value);
  };

  const endTimeHandler = (event) => {
    setEndTime(event.target.value);
  };
  
  const planHandler = async () => {
    
    setTogglePanel(!togglePanel);
    
  };

 
  return (
    <Fragment>
      {!togglePanel && (
        <form className="flex justify-center capitalize p-6 rounded-md">
          <div className=" form-plan-container  bg-gray-100 rounded-md shadow-2xl">
            <div className="form-plan-item ">
              <label className="text-2xl mb-2">Enter number of days</label>
              <input
                type="number"
                min="1"
                value={noOfDays}
                onChange={noOfDaysHandler}
                className=" text-2xl text-center w-80  rounded h-12 mt-3"
              />
            </div>
            <div className=" form-plan-item">
              <label className="text-2xl mb-2">
                Enter your average start time
              </label>
              <select
                className="w-80 h-12 text-2xl"
               
                type="time"
                name="starttime"
                id="starttime"
                value={startTime}
                onChange={startTimeHandler}
              >
                <option value="6AM">6:00am</option>
                <option value="7AM">7:00am</option>
                <option value="8AM">8:00am</option>
                <option value="9AM">9:00am</option>
                <option value="10AM">10:00am</option>
                <option value="11AM">11:00am</option>
                <option value="12PM">12:00pm</option>
                <option value="1PM">1:00pm</option>
                <option value="2PM">2:00pm</option>
                <option value="3PM">3:00pm</option>
                <option value="4PM">4:00pm</option>
                <option value="5PM">5:00pm</option>
                <option value="6PM">6:00pm</option>
              </select>
            </div>
            <div className=" form-plan-item">
              <label className="text-2xl mb-2">
                Enter your average end time
              </label>
              <select
                className="w-80 h-12 text-2xl"
               
                type="time"
                name="starttime"
                id="starttime"
                value={endTime}
                onChange={endTimeHandler}
              >
                <option value="12PM">12:00pm</option>
                <option value="1PM">1:00pm</option>
                <option value="2PM">2:00pm</option>
                <option value="3PM">3:00pm</option>
                <option value="4PM">4:00pm</option>
                <option value="5PM">5:00pm</option>
                <option value="6PM">6:00pm</option>
                <option value="7PM">7:00Pm</option>
                <option value="8PM">8:00pm</option>
                <option value="9PM">9:00pm</option>
                <option value="10PM">10:00pm</option>
                <option value="11PM">11:00pm</option>
                <option value="12PM">12:00pm</option>
                <option value="1AM">1:00am</option>
              </select>
            </div>
            <div className=" form-plan-item">
              <label className="text-2xl mb-2">Enter city</label>
              <select
                required
                value={selectedCity}
                onChange={selectedCityHandler}
                className=" w-80 h-12 text-2xl bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="cairo">Cairo</option>
                <option value="luxor">Luxor</option>
                <option value="alexandria">Alexandria</option>
                <option value="giza">Giza</option>
                <option value="fayoum">Fayoum</option>
                <option value="hurghada">Hurghada</option>
                <option value="Sharm el sheikh">Sharm El Sheikh</option>
              </select>
            </div>
            <div className="form-plan-item ">
              <label className="text-2xl mb-2">
                Enter your starting location
              </label>
              <input
                type="text"
                className=" text-md  w-80  rounded h-12 mt-3"
              />
            </div>
            <div className=" form-plan-item form-plan-button">
              <button
                onClick={planHandler}
                className=" w-36 text-xl disabled:cursor-not-allowed h-12   bg-blue-500 text-white  px-4 rounded-lg  transition delay-100 duration-300 ease-in-out"
              >
                {" "}
                Plan
              </button>
            </div>
          </div>
        </form>
      )}
      { togglePanel  && (<div>
        <PlanDisplay info={{
          startTime: startTime,

          endTime: endTime,
          longitude: 30.4,
          latitude: 33,
          noOfDays: parseInt(noOfDays),
          selectedCity: selectedCity
        }}  ></PlanDisplay>
      </div>)}
    </Fragment>
  );
};
export default plan;
