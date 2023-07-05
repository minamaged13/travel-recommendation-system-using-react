import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlanCard from "@/UI/PlanCard";
const PlanDisplay = (props) => {
  console.log("data from display ", props.info);
  const [loading,setLoading]=useState(true);
  
  const data = {
    "0": [
      {
        "city": "Cairo",
        "close_time": "11PM",
        "location": [
          "30.112315",
          "31.3438507"
        ],
        "name": "Ruby Tuesday",
        "open_time": "12AM"
      },
      {
        "attraction_name": "Nature Stillness Park",
        "city": "cairo",
        "close_time": "12AM",
        "location": [
          30.11386,
          31.33632
        ],
        "open_time": "6AM"
      },
      {
        "attraction_name": "The Child Museum",
        "city": "cairo",
        "close_time": "4PM",
        "location": [
          30.10224,
          31.33695
        ],
        "open_time": "9AM"
      },
      {
        "city": "Cairo",
        "close_time": "12AM",
        "location": [
          "30.0918863",
          "31.3407048"
        ],
        "name": "Rossini Restaurant",
        "open_time": "12PM"
      },
      {
        "attraction_name": "Egyptian Air Force Museum",
        "city": "cairo",
        "close_time": "5PM",
        "location": [
          30.09662,
          31.35162
        ],
        "open_time": "9AM"
      }
    ],
    "1": [
      {
        "city": "Cairo",
        "close_time": "12AM",
        "location": [
          "30.0730307",
          "31.2220123"
        ],
        "name": "Maat",
        "open_time": "8AM"
      },
      {
        "attraction_name": "Play Time Park",
        "city": "cairo",
        "close_time": "12AM",
        "location": [
          30.06984,
          31.22703
        ],
        "open_time": "6AM"
      },
      {
        "attraction_name": "Rawdet ElNil Garden",
        "city": "cairo",
        "close_time": "12AM",
        "location": [
          30.07621,
          31.22853
        ],
        "open_time": "10AM"
      },
      {
        "city": "Cairo",
        "close_time": "3AM",
        "location": [
          "30.0722263",
          "31.2281158"
        ],
        "name": "Bab El Nil Restaurant",
        "open_time": "11AM"
      },
      {
        "attraction_name": "Mamsha Ahl Misr",
        "city": "cairo",
        "close_time": "12AM",
        "location": [
          30.060,
          31.227
        ],
        "open_time": "6AM"
      }
    ]
  };
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(!loading)
    },4000)

  },[])
  const dataArray = Object.values(data);
  console.log(dataArray);
  
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
  // useEffect(() => {
  //   loadPlanData();
  // }, []);
  console.log("inside plan display ", props.info);
  return (
    <Fragment>
      <div className="text-5xl capitalize p-5 ml-5">
        <p>      Your customized plan   </p>
      </div>
      {loading &&  (
          <div className="text-center h-96 p-5">
            <div role="status" className="p-6">
              <svg
                aria-hidden="true"
                class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
             <p className="text-3xl "> building your plan... </p>
            </div>
          </div>
        )}
        {!loading&&
        dataArray.map((item, index) => (
          <div className="m-5 p-3">
            <div className="reco-card rounded-xl shadow-xl bg-blue-200">
              <div className=" capitalize">
                <p className=" text-3xl"> Day :{index+1}</p>
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



      {/* {planData.length > 0 &&
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
        ))} */}
    </Fragment>
  );
};
export default PlanDisplay;
