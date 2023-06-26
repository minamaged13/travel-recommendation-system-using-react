import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const RecommendCard = (props) => {
  const router = useRouter();
  const viewHandler = () => {
    router.push({
      pathname: "/viewInfo",
      query: { id: props.id ,type:props.type},
    });
  };
  return (
    <Fragment>
      <div className=" reco-mini-card mt-4 shadow-2xl mr-8 ml-8 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <img
          src={`${props.src}`}
          className="mt-10  object-cover w-72 h-36 rounded-3xl p-3"
        ></img>
        <div className=" grid-cards">
          <div>
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{props.name}</h5>
          </div>
          <div className="flex justify-start ">
            <p className=" desc text-xl  font-normal text-gray-700 dark:text-gray-400 truncate">{props.desc} {props.cuisines.slice(0,28)}</p>
          </div>
          <div>
            <p className=" text-xl font-normal text-gray-700 dark:text-gray-400">
             Rating: {props.rating} {props.ratings}
            </p>
          </div>
          <div className=" view flex justify-center">
            <button
              onClick={viewHandler}
              className=" w-32 h-12 text-2xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              view
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RecommendCard;
