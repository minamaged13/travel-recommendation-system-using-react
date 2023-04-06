import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { UserActions } from "@/store/UserSlice";
const BasicInfo = () => {
  const user = useSelector((state) => state.user);
  const router=useRouter();
  const dispatch= useDispatch();
const logoutHandler=()=>{
 dispatch(UserActions.logout());
 router.replace("/");
}
  return (
    <Fragment>
      <div className="flex  capitalize p-8">
        <div className="grid grid-cols-2 gap-y-8 ">
          <label className="text-xl flex  text-gray-700"> first name : </label>
          <p className="text-2xl"> {user.firstName}</p>
          <label className="text-xl flex  text-gray-700"> second name : </label>
          <p className="text-2xl"> {user.secondName}</p>
          <label className="text-xl flex  text-gray-700"> E-mail :</label>
          <p className="text-2xl">{user.email}</p>
          <label className="text-xl flex  text-gray-700"> country : </label>
          <p className="text-2xl"> {user.country}</p>
        </div>
      </div>
      <div className="flex justify-center pt-44 ">
        <button onClick={logoutHandler} className=" hover:shadow-2xl hover:bg-red-600  ml-20 p-4 font-semibold rounded-3xl bg-red-500">
          LOG OUT
        </button>
      </div>
    </Fragment>
  );
};
export default BasicInfo;
