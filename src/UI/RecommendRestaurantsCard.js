import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const recommendRestaurantsCard = (props) => {
  
  const router= useRouter();
  const viewHandler=()=>{
  
  router.push({
    pathname:"/viewInfo",
    query:{id:props.id},
  });
  }
  return (
    <Fragment>
      <div className="w-72 mt-10 mb-20 shadow-2xl mr-8 ml-8 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">


       <img  src={`${props.src}`} class="mt-10  object-cover w-72 h-36 rounded-3xl p-3"></img>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${props.name}`}</h5>
    
          <div className="flex justify-start">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${props.desc.slice(0,62)}...`}</p>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$$</p>
          <button onClick={viewHandler} className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            view
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default recommendRestaurantsCard;