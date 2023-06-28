import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";
import Recommend from "./Recommend";
import MoreLikeThis from "./MoreLikeThis";

const ViewInfo = (props) => {
  const [dataToShow, setDataToShow] = useState({});
  const [cosine, setCosine] = useState([]);
  async function getData() {
    const response = await fetch(
      `http://localhost:4000/${props.type}/${props.id}`
    );
    if (response.ok) {
      console.log("response.ok");
      const data = await response.json();
      setDataToShow(data);
      console.log("Data: after request ", data);
      console.log(dataToShow);
    }
  }
  async function getCosine() {
    const response = await fetch(
      `http://localhost:4000/${props.type}/recommender/cosine/${props.id}`
    );
    if (response.ok) {
      console.log("response.ok");
      const data = await response.json();
      setCosine(data);
      console.log(`"Data: after cosine request  " ${props.id}`, data);
      console.log(cosine);
    }
  }
 
  useEffect(() => {
    getData();
  }, [props.id]);
  useEffect(() => {
    console.log("Data: of page ", dataToShow);
  }, [dataToShow, cosine,props.id]);
  useEffect(() => {
    getCosine();
  }, [dataToShow]);
  return (
    <Fragment>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={dataToShow.image_url || dataToShow.imageUrl}
          width={400}
          height={300}
        />
      </div>
      <div className="p-4"></div>
      <div className="p-8">
        <p className="text-gray-800 text-5xl "> {dataToShow.name}</p>
        <p className="text-gray-500 p-3 text-3xl "> keywords : {dataToShow.description} {dataToShow.location} {dataToShow.keywords}</p>
        <p className="text-gray-500 p-3 text-3xl ">{dataToShow.city}</p>
        <p className="text-gray-500 p-3 text-2xl "> Rating: {dataToShow.rating} {dataToShow.ratings} {dataToShow.rate}</p>
      </div>
      {/* cosine show up */}
      <div className="p-3 m-5">
      <MoreLikeThis items={cosine} type={props.type}/>
      </div>
    </Fragment>
  );
};

export default ViewInfo;
