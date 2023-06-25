import RecommendCard from "@/UI/RecommendCard";
import { data } from "autoprefixer";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import recommendRestaurantsCard from "@/UI/RecommendRestaurantsCard";

const recommender = () => {
  const userID = useSelector((state) => state.user.id);
  const [selectedCity, setSelectedCity] = useState("Cairo");
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
    },5000)
  

        setRequestValid(false)
     
  };
  ///hotels
  useEffect(() => {
    console.log("selectedCity", selectedCity);
    console.log("userID in page recommender: ", userID)
    //ToDO: pass the user id & city name to the backend url
    fetch(`http://localhost:4000/hotels/recommender/${userID}/${selectedCity}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log ('Data hotels : ', data);
        setRecommendHotels(data);
      })
      .catch((error) => console.error(error));
  }, [selectedCity]);
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
        console.log ('Data attractions: ', data);
        setRecommendAttractions(data);
      })
      .catch((error) => console.error(error));
  }, [selectedCity]);
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
        console.log("Data restaurants : ", data);
        setRecommendRestaurants(data);
      })
      .catch((error) => console.error(error));
  }, [selectedCity]);

  return (
    <Fragment>
      <div className="capitalize">
     <div class="" >
     <div class="bg-gray-200 m-5 shadow-lg  overflow-hidden relative pt-5">
    <div class="m-20 bg-white shadow-lg rounded-3xl  text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class=" text-4xl font-extrabold text-black  ">
            <span class="block ">
               Where do you want to go?
            </span>
            <span class="block text-blue-500 ">
               pick a city
            </span>
        </h2>
        <div></div>
        <p class="text-xl mt-4 pr-10 text-gray-400">
            I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-10 inline-flex rounded-md shadow">
            <select 
            required
            value={selectedCity}
            onChange={selectedCityHandler}
            class="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
          {!counter&& <option  >Choose City</option>}
            <option value="Cairo" >Cairo</option>
            <option value="Luxor">Luxor</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Giza">Giza</option>
            <option value="Fayoum">Fayoum</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Sharm el sheikh">Sharm El Sheikh</option>
          </select>
            </div>
        </div>
    </div>
    <div className=" ">
    <img src="https://pngimg.com/uploads/sphinx/sphinx_PNG23.png"  class="absolute top-0 right-0 hidden h-full w-4/6 lg:block p-20"/>
</div>
</div>

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

            <div className=" flex items-center  bg-blue-200 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">
              {recommendHotels.map((item) => (
                <div
                  key={item.id}
                  className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  "
                >
                  <RecommendCard
                     desc={item.description || ""}
                    name={item.name}
                    src={item.imageUrl}
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
            <div className=" flex items-center  bg-blue-200 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">
              {recommendRestaurants.map((item) => (
                <div
                  key={item.id}
                  className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  "
                >
                  <RecommendCard
                    desc={item.cuisines || ""}
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
            <div className=" flex items-center  bg-blue-200 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">
              {recommendAttractions.map((item) => (
                <div
                  key={item.id}
                  className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  "
                >
                  <RecommendCard
                    desc={item.description || ""}
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
