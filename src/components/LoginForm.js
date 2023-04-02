import {Fragment, useState} from 'react';
import Link from 'next/link';

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
    recommendHotel(1,"Cairo")
  };
  async function login () {
    await fetch ('http://localhost:4000/users/login', {
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
        console.log ('Response ---------->');
        const data = await response.json ();
        console.log (data);
        console.log (response.body.user);
      })
      // .then (data => console.log (data))
      .catch (error => console.error (error));
  }


 


  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  return (
    <Fragment>
      <form
        onSubmit={formSubmissionHandler}
        className="flex flex-col justify-center items-center m-20    "
      >
        <div className="capitalize text-2xl   pt-8 pb-20 shadow-2xl    rounded-md border-solid  bg-gray-100 ">
          <div className="ml-8 mt-7 mr-6 mb-6">
            { enteredEmail.length>0  && <label htmlFor="email"> E-Mail</label> }
            <input
              className=" flex border border-2 border-gray-200 rounded-lg w-72 "
              type="email"
              id="email"
              placeholder=' E-mail Address'
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
              required
            />
            {enteredEmailIsInvalid &&
              <p className=" text-red-700 text-sm  ">
                Please enter a valid email.
              </p>}
          </div>
          <div className=" ml-8 mb-6">
            {enteredPassword.length>0 &&<label htmlFor="password">password</label> }
            <input
              className=" flex border border-2 border-gray-300 rounded-lg w-72 "
              type="password"
              id="password"
              placeholder=' Password'
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
              required
            />
          </div>

          <div className=" pt-4 ">
            <button
              className="ml-8 disabled:cursor-not-allowed h-10   bg-blue-500 text-white  px-4 rounded-lg  transition delay-100 duration-300 ease-in-out "
              disabled={!formIsValid}
            >
             Sign In
            </button>
            <Link href="/register" className="text-sm pl-3">
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
