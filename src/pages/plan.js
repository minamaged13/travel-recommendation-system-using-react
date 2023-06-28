import GetLocation from "@/components/GetLocation";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Fragment, useState } from "react";

const plan = () => {
  const [togglePanel,setTogglePanel]= useState(false);
  const toggle= ()=>{
    setTogglePanel(!togglePanel);
  }
  return (
    <Fragment>
      {!togglePanel && <form className="flex justify-center capitalize p-6 rounded-md">
        <div className=" form-plan-container  bg-gray-100 rounded-md shadow-2xl">
          <div className="form-plan-item ">
            <label className="text-2xl mb-2">Enter number of days</label>
            <input
              type="number"
              min="0"
              defaultValue="0"
              className=" text-2xl text-center w-80  rounded h-12 mt-3"
            />
          </div>
          <div className=" form-plan-item">
            <label className="text-2xl mb-2">
              Enter your average start time
            </label>
            <select
              className="w-80 h-12 text-2xl"
              class="form-control"
              type="time"
              name="starttime"
              id="starttime"
              value=""
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
            <label className="text-2xl mb-2">Enter your average end time</label>
            <select
              className="w-80 h-12 text-2xl"
              class="form-control"
              type="time"
              name="starttime"
              id="starttime"
              value=""
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
              <option value="11PM">11:00pM</option>
              <option value="12PM">12:00pm</option>
              <option value="1AM">1:00am</option>
            </select>
          </div>
          <div className=" form-plan-item">
          <label className="text-2xl mb-2">Enter city</label>
            <select
              required
              className=" w-80 h-12 text-2xl bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="Cairo">Cairo</option>
              <option value="Luxor">Luxor</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Giza">Giza</option>
              <option value="Fayoum">Fayoum</option>
              <option value="Hurghada">Hurghada</option>
              <option value="Sharm el sheikh">Sharm El Sheikh</option>
            </select>
          </div>
          
          <div className=" form-plan-item form-plan-button">
            <button onClick={toggle} className=" w-24 text-xl disabled:cursor-not-allowed h-12   bg-blue-500 text-white  px-4 rounded-lg  transition delay-100 duration-300 ease-in-out">
              {" "}
             next
            </button>
          </div>
        </div>
      </form>}
      <div>
     <GetLocation/>
      </div>
    </Fragment>
  );
};
export default plan;
