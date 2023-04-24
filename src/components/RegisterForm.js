import User from "@/models/User";
import { Fragment, useState } from "react";
import DropDownList from "./DropDownList";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "@/store/registerSlice";
import { useRouter } from "next/router";
import {UserActions} from "@/store/UserSlice";


const Form = (props) => {
  const router = useRouter();
  
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
  const [enteredSecondName, setEnteredSecondName] = useState("");
  const [enteredSecondNameTouched, setEnteredSecondNameTouched] =
    useState(false);

  const [enteredNationality, setEnteredNationality] = useState("");

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredConfirmPasswordTouched, setEnteredConfirmPasswordTouched] =
    useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const enteredSecondNameIsValid = enteredSecondName.trim() !== "";
  const nameInputIsInvalid =
    !enteredFirstNameIsValid &&
    enteredFirstNameTouched &&
    !enteredSecondNameIsValid &&
    enteredSecondNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid =
    enteredPassword.length >= 8 && enteredConfirmPassword === enteredPassword;

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }
  const nationalityChangeHandler = (event) => {
    setEnteredNationality(event.target.value);
  };

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const secondNameInputChangeHandler = (event) => {
    setEnteredSecondName(event.target.value);
  };
  const passwordInputChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    
  };
  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };
  const confirmPasswordInputChangeHandler = (e) => {
    setEnteredConfirmPassword(e.target.value);
  };
  const confirmPasswordInputBlurHandler = (event) => {
    setEnteredConfirmPasswordTouched(true);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const firstNameInputBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
  };
  const secondNameInputBlurHandler = (event) => {
    setEnteredSecondNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    regsister();
    // router.push('/')
  }

  async function regsister () {
    console.log("enteredFirstName", enteredFirstName);
    const user = new User(
      enteredFirstName,
      enteredSecondName,
      enteredEmail,
      enteredPassword,
      enteredNationality,
    );
    console.log("user");
    console.log(user);
    setFormSubmitted(true);
    dispatch(registerActions.toggle());
    let idOfUser;
    const response=await fetch ('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        firstName: user.firstName,
        secondName: user.lastName,
        email: user.email,
        password: user.password,
        nationality:user.nationality

      }),
    })
    if (response.ok) {
      console.log("response.ok");
      const data = await response.json ();
      console.log("Data Of new User: ",data);

      dispatch (UserActions.logIn ({
        id: data.id, 
        firstName: data.firstName,
        secondName: data.secondName,
        email: data.email,
        country: data.country,
        hotelPreferencesLikes:data.hotelPreferencesLikes,
        restaurantCuisinesLikes:data.restaurantCuisinesLikes,
        //attraction

      } ));
      console.log ('Success:', data.id);      // router.push ('/profile');
      
      // console.log ('UserID: ', userIDState);
    } else {
      console.error ('Error:', response.status);
    }

  }

  return (
    <Fragment>
      {!formSubmitted && (
        <form
          onSubmit={formSubmissionHandler}
          className="flex flex-col justify-center items-center shadow-2xl  "
        >
          <div className="capitalize text-xl  font-bold-300 m-9 p-6 shadow-2xl rounded-2xl border-solid bg-gray-100  ">
            <div className=" ml-8 mb-6 ">
              <label htmlFor="name"> first Name</label>
              <input
                className=" flex border rounded-lg border-black   "
                type="text"
                id="firstName"
                onChange={firstNameInputChangeHandler}
                onBlur={firstNameInputBlurHandler}
                value={enteredFirstName}
                required
              />
              {nameInputIsInvalid && (
                <p className="text-red-700 text-lg">
                  first Name must not be empty.
                </p>
              )}
            </div>
            <div className=" ml-8 mb-6 ">
              <label htmlFor="name">second Name</label>
              <input
                className=" flex border rounded-lg border-black   "
                type="text"
                id="secondName"
                onChange={secondNameInputChangeHandler}
                onBlur={secondNameInputBlurHandler}
                value={enteredSecondName}
                required
              />
              {nameInputIsInvalid && (
                <p className="text-red-700 text-lg">
                  second Name must not be empty.
                </p>
              )}
            </div>
            <div className="ml-8 mb-6">
              <label htmlFor="email">Your E-Mail</label>
              <input
                className=" flex border border-black rounded-lg  "
                type="email"
                id="email"
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                value={enteredEmail}
                required
              />
              {enteredEmailIsInvalid && (
                <p className=" text-red-700 text-lg">
                  Please enter a valid email.
                </p>
              )}
            </div>
            <div className=" ml-8 mb-6">
              <label htmlFor="password">password</label>
              <input
                className=" flex border border-black  rounded-lg "
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurHandler}
                required
              ></input>
              {enteredPassword.length < 8 && enteredPasswordTouched && (
                <p className="text-lg text-red-700 ">at least 8 characters</p>
              )}
            </div>
            <div className="ml-8 mb-6">
              <label htmlFor="password"> confirm password</label>
              <input
                className=" flex border border-black rounded-lg  "
                type="password"
                id="confirmPassword"
                value={enteredConfirmPassword}
                onChange={confirmPasswordInputChangeHandler}
                onBlur={confirmPasswordInputBlurHandler}
                required
              ></input>
              {enteredConfirmPassword !== enteredPassword &&
                enteredConfirmPasswordTouched &&
                enteredConfirmPassword.length > 0 && (
                  <p className="text-lg text-red-700">passwords are not matched</p>
                )}
            </div>
            <div className="ml-8 mb-6">
              <label className="flex pt-5 ml-1 ">Choose your nationality</label>
              <DropDownList
                value={enteredNationality}
                onChange={nationalityChangeHandler}
              />
            </div>
            <div className="">
              <button
                className="ml-20 disabled:cursor-not-allowed disabled:bg-black bg-stromi-200 hover:bg-stromi-100 text-white font-bold py-2 px-4 rounded-full mt-6 transition delay-100 duration-300 ease-in-out "
                disabled={!formIsValid}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
};
export default Form;
