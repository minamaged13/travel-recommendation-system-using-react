import RecommendCard from '@/UI/RecommendCard';
import {Fragment, useEffect, useState} from 'react';

const recommender = () => {
  const [selectedCity, setSelectedCity] = useState ('Cairo');
  const [recommendHotels, setRecommendHotels] = useState ([]);
  const selectedCityHandler = event => {
    setSelectedCity (event.target.value);
    console.log (selectedCity);
  };
  useEffect (() => {
    console.log('selectedCity', selectedCity)
    //ToDO: pass the user id & city name to the backend url 
    fetch (`http://localhost:4000/hotels/recommender/1/${selectedCity}` )
      .then ((response) => {
        return response.json ();
      })
      .then ((data) => {
        console.log ('Data: ', data);
        setRecommendHotels (data);
      })
      .catch (error => console.error (error));
  }, [selectedCity]);
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
            <option value="Cairo">Cairo</option>
            <option value="Luxor">Luxor</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Giza">Giza</option>
            <option value="Fayoum">Fayoum</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Sharm el sheikh">Sharm El Sheikh</option>
          </select>
        </div>
        <div className="flex justify-center text-7xl mt-20 mb-16">
          <p>Special for you</p>
        </div>
        {/* block */}
        <div className="h-screen p-9 shadow-2xl">
          <p className="text-5xl mb-8 border-white flex inline-flex mt-3 ">
            hotels for you
          </p>
          <div className=" flex items-center  bg-yellow-300 justify-start scroll-auto shadow-2xl rounded-lg snap-x snap-mandatory scroll-m-10px overflow-scroll ">

            {recommendHotels.map (item => (
              <div key={item.id} className=" snap-center  scroll-ml-18 snap-always shrink-0  pr-10  ">
                <RecommendCard
                  desc={item.description}
                  name={item.name}
                  // src={image}
                  
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
