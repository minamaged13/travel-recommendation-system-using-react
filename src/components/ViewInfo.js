import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";

const ViewInfo = (props) => {
  const [dataToShow, setDataToShow] = useState({});
  async function getData() {
    const response = await fetch(`http://localhost:4000/${props.type}/${props.id}`);
    if (response.ok) {
      console.log("response.ok");
      const data = await response.json();
      setDataToShow(data);
      console.log("Data: after request ", data);
      console.log(dataToShow)
    }
  }
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log("Data: ", dataToShow);
  }, [dataToShow]);

  return (
    <Fragment>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={dataToShow.image_url}
          width={400}
          height={300}
        />
      </div>
      <div className="p-4"></div>
      <div className="p-8">
        <p className="text-gray-800 text-5xl "> {dataToShow.name}</p>
        <p className="text-gray-500 text-sm">{dataToShow.description}</p>
      </div>
    </Fragment>
  );
};

export default ViewInfo;
