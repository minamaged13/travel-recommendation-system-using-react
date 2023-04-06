import RecommendCard from "@/UI/RecommendCard";
import { data } from "autoprefixer";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const recommender = () => {
  const userID = useSelector((state) => state.user.userID);
  const [selectedCity, setSelectedCity] = useState();
  const [recommendHotels, setRecommendHotels] = useState([]);
  const [recommendRestaurants, setRecommendRestaurants] = useState([]);
  const [recommendAttractions, setRecommendAttractions] = useState([]);
  const [requestValid,setRequestValid]=useState(false);
  const[counter,setCounter]=useState(false)

  const selectedCityHandler = (event) => {
    setCounter(true);
    console.log(selectedCity);
    setSelectedCity(event.target.value);
    setTimeout(()=>{
      setRequestValid(true)
    },4000)
  

        setRequestValid(false)
     
  };
  ///hotels
  useEffect(() => {
    console.log("selectedCity", selectedCity);
    //ToDO: pass the user id & city name to the backend url
    fetch(`http://localhost:4000/hotels/recommender/${userID}/${selectedCity}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log ('Data: ', data);
        setRecommendHotels(data);
      })
      .catch((error) => console.error(error));
  }, [data]);
  ///attractions
  useEffect(() => {
    console.log("Attractions");
    //ToDO: pass the user id & city name to the backend url
    fetch(
      `http://localhost:4000/attractions/recommender/${userID}/${selectedCity}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log ('Data: ', data);
        setRecommendAttractions(data);
      })
      .catch((error) => console.error(error));
  }, [data]);
  // /restaurants
  useEffect(() => {
    //ToDO: pass the user id & city name to the backend url
    fetch(
      `http://localhost:4000/restaurants/recommender/${userID}/${selectedCity}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data: ", data);
        setRecommendRestaurants(data);
      })
      .catch((error) => console.error(error));
  }, [data]);

  return (
    <Fragment>
      <div className="capitalize  ">
        <div className="flex justify-center pt-48 font-mono h-96 bg-blue-500 ">
          <label className="mr-5 text-5xl font-mono">where to go ?</label>
          <select 
            required
            value={selectedCity}
            onChange={selectedCityHandler}
            className="w-72 h-12 text-3xl border border-2 shadow-lg rounded-2xl border-black"
          >
          {!counter&& <option  >Choose City</option>}
            <option value="cairo" >Cairo</option>
            <option value="luxor">Luxor</option>
            <option value="alexandria">Alexandria</option>
            <option value="giza">Giza</option>
            <option value="fayoum">Fayoum</option>
            <option value="hurghada">Hurghada</option>
            <option value="sharm el sheikh">Sharm El Sheikh</option>
          </select>
        
        </div>
        <div className="flex justify-center text-7xl mt-20 mb-16 ">
          <p>Special for you</p>
        </div>
        {!requestValid && (
         <div class="text-center">
        <div role="status">
    <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
     </div>
        )}

        <div className={`${!requestValid && " animate-pulse"}`}>
          {/* hotels */}
          <div className="h-screen p-9 shadow-2xl">
            <p className="text-5xl mb-8 border-white flex inline-flex mt-3 ">
              hotels for you
            </p>
            <div className=" flex items-center  bg-yellow-300 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">
              {recommendHotels.map((item) => (
                <div
                  key={item.id}
                  className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  "
                >
                  <RecommendCard
                    desc={item.description}
                    name={item.name}
                    src={item.imageUrl}
                    id={item.id}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* restaurants */}
          <div className="h-screen p-9 shadow-2xl mt-11 ">
            <p className="text-5xl mb-8 border-white flex inline-flex mt-3 ">
              restaurants for you
            </p>
            <div className=" flex items-center  bg-yellow-300 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">
              {recommendRestaurants.map((item) => (
                <div
                  key={item.id}
                  className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  "
                >
                  <RecommendCard
                    desc={item.cuisines}
                    name={item.name}
                    src={item.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* attractions*/}
          <div className="h-screen p-9 shadow-2xl">
            <p className="text-5xl mb-8 border-white flex inline-flex mt-3 ">
              attractions for you
            </p>
            <div className=" flex items-center  bg-yellow-300 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">
              {recommendAttractions.map((item) => (
                <div
                  key={item.id}
                  className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  "
                >
                  <RecommendCard
                    desc={item.description}
                    name={item.name}
                    src={item.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </Fragment>
  );
};
export default recommender;
