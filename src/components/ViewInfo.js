import Image from "next/image";
import React, { Fragment } from "react";

const ViewInfo = () => {
  const imageSrc = "/travel.png";
  return (
    <Fragment>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={imageSrc}
          width={400}
          height={300}
        />
      </div>
      <div className="p-4"></div>
      <div className="p-8">
        <p className="text-gray-800 text-5xl "> name</p>

        <p className="text-gray-500 text-sm"></p>
      </div>
    </Fragment>
  );
};

export default ViewInfo;
