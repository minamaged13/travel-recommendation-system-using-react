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
       <div className="w-96 p-2 m-auto bg-white shadow-lg rounded-2xl mt-20 ">
        <div className="flex items-center justify-center ">
        <div className="w-32 rounded-full">
          <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" class="rounded-full" />
        </div>
      </div>
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


      <div class="flex justify-center">
      <div class="flex items-center  ">
      <div className="flex justify-center pb-10 pr-10  ">
        <button onClick={logoutHandler} className="text-xl p-4 px-7 bg-red-400 rounded-2xl hover:shadow-2xl">Logout</button>
      </div>
      <div className="flex justify-center pb-10  ">
        <button className="text-xl p-4 px-7 bg-blue-400 rounded-2xl hover:shadow-2xl">Edit</button>
      </div>
      </div>
      </div>
      </div>

    </Fragment>
  );
};
export default BasicInfo;
