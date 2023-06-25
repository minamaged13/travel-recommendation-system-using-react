import { useState } from "react";
const useEditInfo = () => {
  const [errorMessages, setErrorMessages] = useState(false);
  // const myObject = useSelector (state => state.user.myObject);
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
  const [enteredSecondName, setEnteredSecondName] = useState("");
  const [enteredSecondNameTouched, setEnteredSecondNameTouched] =
    useState(false);

  const [enteredNationality, setEnteredNationality] = useState("");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
};
export default useEditInfo;
