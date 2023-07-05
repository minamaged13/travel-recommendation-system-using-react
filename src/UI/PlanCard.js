import { Fragment } from "react";
import Image from "next/image";

import { useRouter } from "next/router";
import { useState } from "react";
const PlanCard = (props) => {
  console.log("plan card ", props.item);
  const item = props.item;
  const type = props.item.attraction_name ? "Attraction" : "Restaurant";
  return (
    <Fragment>
      <div className=" reco-mini-card mt-4 shadow-2xl mr-8 ml-8 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <Image
          src="/travel.png"
          width={400}
          height={550}
          className="mt-10  object-cover w-72 h-36 rounded-3xl p-3"
        ></Image>
        <div className=" grid-plan-cards">
          <div>
            <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">
              {item.name} {item.attraction_name}{" "}
            </h5>
          </div>
          {/* <div className="flex justify-start ">
            <p className=" desc text-xl  font-normal text-gray-700 dark:text-gray-400 truncate">City : {item.city} </p>
          </div> */}
          <div className="flex justify-start ">
            <p className=" desc text-xl  font-normal text-gray-700 dark:text-gray-400 truncate">
              Location:
            </p>
          </div>
          <p className=" desc text-md  font-normal text-gray-700 dark:text-gray-400 truncate">
            {item.location[0]}    {item.location[1]}{" "}
          </p>
          <div className="flex justify-start ">
            <p className="  text-xl  font-normal text-gray-700 dark:text-gray-400 truncate">
              {" "}
              Type : {type}{" "}
            </p>
          </div>
          <div>
            <p className=" text-xl font-normal text-gray-700 dark:text-gray-400 pb-4">
              opening time : {item.open_time}
            </p>
            <p className=" text-xl font-normal text-gray-700 dark:text-gray-400">
              closing time : {item.close_time}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PlanCard;
