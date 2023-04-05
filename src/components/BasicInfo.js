import { Fragment } from "react";
import { useSelector } from "react-redux";

const BasicInfo = () => {
  const user = useSelector((state) => state.user.info);
  
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default BasicInfo;
