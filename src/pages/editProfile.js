import { Fragment } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import { useRef } from "react";
import {UserActions} from '@/store/UserSlice';
import DropDownList from "@/components/DropDownList";
import RegisterForm from '@/components/RegisterForm'
const editProfile = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const editedUser= useSelector((state) => state.user);
  const dispatch = useDispatch();


  return <Fragment>
{/* <div className="px-96 p-2 m-auto bg-white  rounded-2xl mt-20 ">
        <div className="flex items-center justify-center ">
          <div className="w-32 rounded-full">
            <img
              src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
              class="rounded-full"
            />
          </div>
        </div>
        <div className="w-96 flex  capitalize p-8">
          <div className="grid grid-cols-2 gap-y-8 ">
            <label className="text-xl flex  text-gray-700">
              {' '}first name :{' '}
            </label>
            <input className="text-2xl text-center" defaultValue={user.firstName} placeholder={user.firstName}/>
            <label className="text-xl flex  text-gray-700">
              {' '}second name :{' '}
            </label>
            <input className="text-2xl text-center" defaultValue={user.secondName}  placeholder={user.secondName}/>
            <label className="text-xl flex  text-gray-700"> E-mail :</label>
            <input className="text-2xl w-72 text-center" defaultValue={user.email}  placeholder={user.email}/>
            <label className="text-xl flex  text-gray-700"> password :</label>
            <input className="text-2xl w-72 text-center"  placeholder="password"/>
            <label className="text-xl flex  text-gray-700">confirm password:</label>
            <input className="text-2xl w-72 text-center"placeholder="confirm pasword"/>
            <label className="text-xl flex  text-gray-700"> Nationality : </label>
            <DropDownList className="text-2xl"  />
          </div>
        </div>

        <div class="flex justify-center">
          <div class="flex items-center  ">
           <button className="text-xl p-4 px-7 bg-blue-400 rounded-2xl hover:shadow-2xl">submit</button>
            
          </div>
        </div>
      </div> */}
{/* <RegisterForm signUp="change" /> */}

  </Fragment>
};
export default editProfile;
