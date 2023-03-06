import {Fragment, useState} from 'react';
import Link from 'next/link';
import User from '@/models/User';

const LoginForm = () => {
  const [enteredPassword, setEnteredPassword] = useState ('');
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState (false);
  const [enteredEmail, setEnteredEmail] = useState ('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState (false);
  const enteredEmailIsValid = enteredEmail.includes ('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = enteredPassword.length >= 8;
  const passwordInputChangeHandler = e => {
    setEnteredPassword (e.target.value);
  };
  const passwordInputBlurHandler = event => {
    setEnteredPasswordTouched (true);
  };
  const emailInputChangeHandler = event => {
    setEnteredEmail (event.target.value);
  };
  const emailInputBlurHandler = event => {
    setEnteredEmailTouched (true);
  };
  const formSubmissionHandler = event => {
    event.preventDefault ();
    login ();
  };
  async function login () {
    const backendUrl=process.env.NEXT_PUBLIC_BACKEND_URL;
    await fetch (backendUrl+'/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        email: enteredEmail,
        password: enteredPassword,
      }),
    })
      .then ( async response => {
        if(response.status == 404){
          console.log("user not found");
        }
        else{
          console.log ('Response ---------->');
          const data = await response.json ();
          console.log (data);
        }
      })
      .catch (error => console.error ("Error at login "+error));
  }

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  return (
    <Fragment>
      <form
        onSubmit={formSubmissionHandler}
        className="flex flex-col justify-center items-center    "
      >
        <div className="capitalize text-2xl font-bold-300 m-9 p-6 shadow-2xl border border-4 border-black rounded-3xl border-solid  bg-stromi-400 ">
          <div className="ml-8 mb-6">
            <label htmlFor="email">Your E-Mail</label>
            <input
              className=" flex border border-black   "
              type="email"
              id="email"
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
              required
            />
            {enteredEmailIsInvalid &&
              <p className=" text-red-700 text-lg">
                Please enter a valid email.
              </p>}
          </div>
          <div className=" ml-8 mb-6">
            <label htmlFor="password">password</label>
            <input
              className=" flex border border-black   "
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
              required
            />
          </div>

          <div className="">
            <button
              className="ml-8 disabled:cursor-not-allowed disabled:bg-black bg-stromi-200 hover:bg-stromi-100 text-white font-bold py-2 px-4 rounded-full mt-6 transition delay-100 duration-300 ease-in-out "
              disabled={!formIsValid}
            >
              Submit
            </button>
            <Link href="/register" className="text-sm">
              {' '}
              dont have account?
            </Link>
          </div>
        </div>

      </form>
    </Fragment>
  );
};
export default LoginForm;
