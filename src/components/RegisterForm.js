import User from "@/models/User";
import { Fragment, useState } from "react";
import DropDownList from "./DropDownList";
import { useRouter } from "next/router";
const Form = () => {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredNationality, setEnteredNationality] = useState("");

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredConfirmPasswordTouched, setEnteredConfirmPasswordTouched] =
    useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid =
    enteredPassword.length >= 8 && enteredConfirmPassword === enteredPassword;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  const nationalityChangeHandler = (event) => {
    setEnteredNationality(event.target.value);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
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

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const user = new User(
      enteredName,
      enteredEmail,
      enteredPassword,
      enteredNationality,
      "01222"
    );
    console.log(user);
    setFormSubmitted(true);
    router.push("/login");
  };
  const callAPI = (user) => {
    const userAction = async () => {
      const response = await fetch(process.env["backendUrl"]+ "/users", {
        method: 'POST',
        body: [...user],
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      // do something with myJson
    }
  };
  return (
    <Fragment>
      {!formSubmitted && (
        <form
          onSubmit={formSubmissionHandler}
          className="flex flex-col justify-center items-center    "
        >
          <div className="capitalize text-2xl font-bold-300 m-9 p-6 shadow-2xl border border-4 border-black rounded-3xl border-solid  bg-stromi-400 ">
            <div className=" ml-8 mb-6 ">
              <label htmlFor="name">Your Name</label>
              <input
                className=" flex border border-black   "
                type="text"
                id="name"
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                value={enteredName}
                required
              />
              {nameInputIsInvalid && (
                <p className="text-red-700 text-lg">Name must not be empty.</p>
              )}
            </div>
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
              {enteredEmailIsInvalid && (
                <p className=" text-red-700 text-lg">
                  Please enter a valid email.
                </p>
              )}
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
              ></input>
              {enteredPassword.length < 8 && (
                <p className="text-lg text-red-700 ">atlease 8 characters</p>
              )}
            </div>
            <div className="ml-8 mb-6">
              <label htmlFor="password"> confirm password</label>
              <input
                className=" flex border border-black   "
                type="password"
                id="confirmPassword"
                value={enteredConfirmPassword}
                onChange={confirmPasswordInputChangeHandler}
                onBlur={confirmPasswordInputBlurHandler}
                required
              ></input>
              {enteredConfirmPassword === enteredPassword &&
                enteredConfirmPasswordTouched &&
                enteredConfirmPassword.length > 0 && (
                  <p className="text-lg text-green-900">passwords are matched</p>
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
                className="ml-28 disabled:cursor-not-allowed disabled:bg-black bg-stromi-200 hover:bg-stromi-100 text-white font-bold py-2 px-4 rounded-full mt-6 transition delay-100 duration-300 ease-in-out "
                disabled={!formIsValid}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
};
export default Form;
