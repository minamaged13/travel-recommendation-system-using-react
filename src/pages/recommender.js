import RecommendCard from "@/UI/RecommendCard";
import { Fragment, useState } from "react";

const recommender = () => {
  const [selectedCity, setSelectedCity] = useState("cairo");
  const selectedCityHandler = (event) => {
    setSelectedCity(event.target.value);
    console.log(selectedCity);
  };
  const hotels = [
    {
      src: "/travel.png",
      name: "almaza hotel in",
      desc: "this is a hotel with great view",
    },
    {
      src: "/travel.png",
      name: "almaza hotel",
      desc: "this is a hotel with great view",
    },
    {
      src: "/travel.png",
      name: "almaza hotel",
      desc: "this is a hotel with great view",
    },
    {
      src: "/travel.png",
      name: "almaza hotel",
      desc: "this is a hotel with great view",
    },
    {
      src: "/travel.png",
      name: "almaza hotel",
      desc: "this is a hotel with great view",
    },
    {
      src: "/travel.png",
      name: "almaza hotel",
      desc: "this is a hotel with great view",
    },
    {
      src: "/travel.png",
      name: "almaza hotel",
      desc: "this is a hotel with great view",
    },
    {
      src: "/travel.png",
      name: "almaza hotel out",
      desc: "this is a hotel with great view",
    },
  ];
  return (
    <Fragment>
      <div className="capitalize">
        <div className="flex justify-center pt-48 font-mono h-96 bg-blue-500 ">
          <label className="mr-5 text-5xl font-mono">choose city</label>
          <select
            required
            value={selectedCity}
            onChange={selectedCityHandler}
            className="w-72 h-12 text-3xl border border-2 shadow-lg rounded-2xl border-black"
          >
            <option value="cairo">Cairo</option>
            <option value="luxor">Luxor</option>
            <option value="alexandria">Alexandria</option>
            <option value="giza">Giza</option>
            <option value="fayoum">Fayoum</option>
            <option value="hurghada">Hurghada</option>
            <option value="sharm el sheikh">Sharm El Sheikh</option>
          </select>
        </div>
        <div className="flex justify-center text-7xl mt-20 mb-16">
          <p>Special for you</p>
        </div>
        {/* block */}
        <div className="h-screen p-9 shadow-2xl">
          <p className="text-5xl mb-8 border-white flex inline-flex mt-3 ">hotels for you</p>
          <div className=" flex items-center  bg-yellow-300 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">
           
            {hotels.map((item) => (
              <div className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  ">
                <RecommendCard
                  desc={item.desc}
                  name={item.name}
                  src={item.src}
                />
              </div>
            ))}
          </div>
        </div>
         {/* block */}
        
      </div>
    </Fragment>
  );
};
export default recommender;
