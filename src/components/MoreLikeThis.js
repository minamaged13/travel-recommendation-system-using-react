import RecommendCard from "@/UI/RecommendCard";
import { Fragment, useEffect, useState } from "react";
const MoreLikeThis = (props) => {
  useEffect(()=>{},[props.items])
  return (
    <Fragment>
      <div className="reco-card rounded-xl shadow-xl bg-blue-200">
        <div className=" capitalize">
          <p className=" text-3xl">more like this for you</p>
        </div>

        <div className=" reco-results">
          { props.items.map((item) => (
            <div key={item.id} className=" reco-result-item">
              <RecommendCard
                desc={item.keywords || ""}
                name={item.name}
                src={item.image_url || item.imageUrl}
                rating={item.rating ||item.rate|| ""}
                ratings={item.ratings || ""}
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
export default MoreLikeThis;
