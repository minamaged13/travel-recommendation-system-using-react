import { Fragment } from "react";
import Image from "next/image";
const RecommendCard = (props) => {
  return (
    <Fragment>
      <div className="w-72 mt-10 mb-20 shadow-2xl mr-8 ml-8 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
          <Image
            className="rounded-t-lg"
            src={`${props.src}`}
            width={300}
            height={400}
            alt=""
          />
        </a> */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${props.name}`}</h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${props.desc.slice(0,62)}`}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$$</p>
          <p className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            view
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default RecommendCard;
