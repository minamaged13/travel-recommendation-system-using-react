import RecommendCard from "@/UI/RecommendCard";
import { Fragment, useEffect, useState } from "react";
const Recommend = (props) => {
  const [recommend, setRecommend] = useState([]);
  async function fetchData() {
    console.log("selectedCity", props.selectedCity);
    console.log("userID in page recommender: ", props.userID);
    //ToDO: pass the user id & city name to the backend url
    const response = await fetch(
      `http://localhost:4000/${props.type}/recommender/${props.userID}/${props.selectedCity}`
    );
    const data = await response.json();
    console.log(data);
    setRecommend(data);
  }

  useEffect(() => {
    fetchData();
  }, [props.selectedCity]);

  return (
    <Fragment>
      <div className="reco-card rounded-xl shadow-xl bg-blue-200">
        <div className=" capitalize">
          <p className=" text-3xl">{props.type} for you</p>
        </div>

        <div className=" reco-results">
          {recommend.length >0 && recommend.map((item) => (
            <div key={item.id} className=" reco-result-item">
              <RecommendCard
                desc={item.keywords || ""}
                name={item.name}
                src={item.image_url || item.imageUrl}
                rating={item.rating || ""}
                ratings={item.ratings || item.rate||''}
                
                id={item.id}
                cuisines={item.cuisines || ""}
                type={props.type}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Recommend;
