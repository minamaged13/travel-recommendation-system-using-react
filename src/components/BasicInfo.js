import { Fragment } from "react";
import { useSelector } from "react-redux";

const BasicInfo = () => {
  const user = useSelector((state) => state.user.info);
  
  return (
    <Fragment>
       <div className="w-96 p-2 m-auto bg-white shadow-lg rounded-2xl ">
        <div className="flex items-center justify-center ">
        <div className="w-24 rounded-full">
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-1047-840229.png?f=webp&w=256" />
        </div>
      </div>
      <div className="flex  capitalize p-8">
        <div className="grid grid-cols-2 gap-y-8 ">
          <label className="text-xl flex  text-gray-700">
            {" "}
            first name :{" "}
          </label>
          <p className="text-2xl"> {user.firstName}</p>
          <label className="text-xl flex  text-gray-700">
            {" "}
            second name :{" "}
          </label>
          <p className="text-2xl"> {user.secondName}</p>
          <label className="text-xl flex  text-gray-700">
            {" "}
            E-mail :
          </label>
          <p className="text-2xl">{user.email}</p>
          <label className="text-xl flex  text-gray-700">
            {" "}
            country :{" "}
          </label>
          <p className="text-2xl"> {user.country}</p>
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default BasicInfo;
