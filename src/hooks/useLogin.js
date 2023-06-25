import { useState } from "react";
const useLogin=()=>{
      const [errorMessages, setErrorMessages] = useState (false);
      // const myObject = useSelector (state => state.user.myObject);
    
      const [enteredPassword, setEnteredPassword] = useState ('');
      const [enteredPasswordTouched, setEnteredPasswordTouched] = useState (false);
      const [enteredEmail, setEnteredEmail] = useState ('');
      const [enteredEmailTouched, setEnteredEmailTouched] = useState (false);
      const enteredEmailIsValid = enteredEmail.includes ('@');
      const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
    
      const enteredPasswordIsValid = enteredPassword.length >= 8;
      return [errorMessages, setErrorMessages,enteredPassword, setEnteredPassword,enteredPasswordTouched, setEnteredPasswordTouched,enteredEmail, setEnteredEmail,enteredEmailTouched, setEnteredEmailTouched,enteredEmailIsValid,enteredEmailIsInvalid,enteredPasswordIsValid ]
}
export default useLogin;