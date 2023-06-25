
import { Fragment } from 'react'
import RegisterForm from "@/components/RegisterForm"
import Preferences from '@/components/Preferences';

import { useDispatch, useSelector } from 'react-redux';
import { registerActions } from '@/store/registerSlice';
const register=()=>{
    
  let userId=useSelector(state=>state.user.id);
    const dispatch= useDispatch();
    const formAppear= useSelector(state=>state.register.toggle)
    const showHandler=()=>{
      dispatch(registerActions.toggle());
      }
    return <Fragment>
       <div className=''>
       {/* <button onClick={showHandler} className="text-2xl"> show/ hide</button> */}
        {!formAppear&&<RegisterForm signUp="Sign Up"/>}
        {formAppear&&<Preferences userId={userId} ></Preferences>}

       </div>
    </Fragment>
}
export default register;