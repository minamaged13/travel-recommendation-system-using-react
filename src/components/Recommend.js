import RecommendCard from "@/UI/RecommendCard";
import { Fragment, useEffect, useState } from "react";
const Recommend = (props) => {
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    console.log("selectedCity", props.selectedCity);
    console.log("userID in page recommender: ", props.userID);
    //ToDO: pass the user id & city name to the backend url
    fetch(
      `http://localhost:4000/${props.type}/recommender/${props.userID}/${props.selectedCity}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data hotels : ", data);
        setRecommend(data);
      })
      .catch((error) => console.error(error));
  }, [props.selectedCity]);

  return (
    <Fragment>
      <div className="reco-card rounded-xl shadow-xl bg-blue-200" >
        <div className="">
          <p className=" text-3xl">
            {props.type} for you
          </p>
        </div>

        <div className=" reco-results">
        {recommend.map((item) => (
              <div
              key={item.id}
              className=" reco-result-item"
              >
            <RecommendCard
              desc={item.description || ""}
              name={item.name}
              src={item.imageUrl}
              rating={item.rating}
              />
          </div>
        ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Recommend;
