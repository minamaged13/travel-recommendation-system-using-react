import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlanCard from "@/UI/PlanCard";
const PlanDisplay = (props) => {
  console.log("data from display ", props.info);
  const [planData, setPlanData] = useState([{}, {}]);
  const userID = useSelector((state) => state.user.id);
  async function loadPlanData() {
    // console.log(userID, selectedCity, startTime, endTime, noOfDays);
    const response = await fetch(
      `http://localhost:5000/recommend/plan/${userID}/${props.info.selectedCity}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startTime: props.info.startTime,
          endTime: props.info.endTime,
          longitude: 30.4,
          latitude: 33,
          noOfDays: props.info.noOfDays,
        }),
      }
    );
    if (response.ok) {
      console.log("response.ok");
      const data = await response.json();
      console.log("Data Of plan: ", data);
      // Assuming the data is stored in a variable called "data"
      // for (let day in data) {
      //   // "day" is the index of the current array, e.g. "0", "1", etc.
      //   let locations = data[day]; // Get the current array of locations
      //   for (let i = 0; i < locations.length; i++) {
      //     let location = locations[i]; // Get the current location object
      //     // Access the properties of the location object, e.g.
      //     console.log(location.city);
      //     console.log(location.name);
      //     console.log(location.location[0]); // latitude
      //     console.log(location.location[1]); // longitude
      //     console.log(location.open_time);
      //     console.log(location.close_time);
      //   }
      // }
      setPlanData(data);
    }
  }
  useEffect(() => {
    loadPlanData();
  }, []);
  console.log("inside plan display ", props.info);
  return (
    <Fragment>
      {planData.length > 0 &&
        planData.map((item, index) => (
          <div>
            <div className="reco-card rounded-xl shadow-xl bg-blue-200">
              <div className=" capitalize">
                <p className=" text-3xl"> Day :{index}</p>
              </div>
              <div className=" reco-results">
                {item.map((item, index) => (
                  <div className=" reco-result-item">
                    <PlanCard item={item} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </Fragment>
  );
};
export default PlanDisplay;
