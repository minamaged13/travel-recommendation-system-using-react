import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { UserActions } from "@/store/UserSlice";
import DropDownList from "./DropDownList";
import React from "react";
const EditBasicInfo = (props) => {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  //////////
  const [firstName, setFirstname] = useState(user.firstName);
  const [FirstNameTouched, setFirstNameTouched] = useState(false);
  const [secondName, setSecondName] = useState(user.secondName);
  const [SecondNameTouched, setSecondNameTouched] = useState(false);
  const [enteredNationality, setEnteredNationality] = useState(
    user.nationality
  );
  const [enteredEmail, setEnteredEmail] = useState(user.email);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  ////////
  const firstNameInputChangeHandler = (event) => {
    setFirstname(event.target.value);
  };
  const secondNameInputChangeHandler = (event) => {
    setSecondName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const firstNameInputBlurHandler = (event) => {
    setFirstNameTouched(true);
  };
  const secondNameInputBlurHandler = (event) => {
    setSecondNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };
  const nationalityChangeHandler = (event) => {
    setEnteredNationality(event.target.value);
  };
  /////////
  const firstNameIsValid = firstName.trim() !== "";
  const secondNameIsValid = secondName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  let formIsValid = false;

  if (firstNameIsValid && secondNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  ///////
  const userID = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  async function doneHandler() {
    console.log(firstName, secondName, enteredEmail);
    const response = await fetch("http://localhost:4000/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        secondName: secondName,
        email: enteredEmail,
      }),
    });
    if (response.ok) {
      console.log("response.ok");
      const data = await response.json();
      console.log("Data: after request ", data);

      dispatch(
        UserActions.editUserInfo({
          firstName: data.firstName,
          secondName: data.secondName,
          email: data.email,
        })
      );
    }
    setTimeout(() => {
      props.onToggle();
    }, 2000);
  }
  const cancelHandler = () => {
    props.onToggle();
  };
  // console.log("BasicInfo: ", user);
  // console.log("USER id : ", userID);
  return (
    <Fragment>
      <div className="px-96 p-2 m-auto bg-white capitalize  rounded-2xl mt-20 ">
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
              {" "}
              first name :{" "}
            </label>
            <input
              className="text-xl w-96 capitalize border border-2  border-gray-400 rounded-md"
              value={firstName}
              onChange={firstNameInputChangeHandler}
              onBlur={firstNameInputBlurHandler}
              required
              // defaultValue={user.firstName}
            />

            <label className="text-xl flex  text-gray-700">
              {" "}
              second name :{" "}
            </label>
            <input
              value={secondName}
              onChange={secondNameInputChangeHandler}
              onBlur={secondNameInputBlurHandler}
              className="text-xl w-96 capitalize border border-2  border-gray-400 rounded-md"
              // defaultValue={user.secondName}
            />
            <label className="text-xl flex  text-gray-700"> E-mail :</label>
            <input
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              className="text-xl w-96 capitalize border border-2  border-gray-400 rounded-md"
              // defaultValue={user.email}
            />
            <label className="text-xl flex  text-gray-700">
              {" "}
              Nationality :{" "}
            </label>
            <DropDownList
              className="text-2xl"
              value={enteredNationality}
              onChange={nationalityChangeHandler}
            >
              {" "}
            </DropDownList>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex items-center  ">
            <div className="flex justify-center pb-10 pr-10  ">
              <button
                onClick={cancelHandler}
                className="text-xl p-4 px-7 bg-red-400 rounded-2xl hover:shadow-2xl"
              >
                cancel
              </button>
            </div>
            <div className="flex justify-center pb-10  ">
              <button
                disabled={!formIsValid}
                onClick={doneHandler}
                className="text-xl p-4 disabled:cursor-not-allowed disabled:bg-gray-300 px-7 bg-blue-400 rounded-2xl hover:shadow-2xl"
              >
                done
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default EditBasicInfo;
