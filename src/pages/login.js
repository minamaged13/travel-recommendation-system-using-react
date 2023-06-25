import LoginForm from "@/components/LoginForm";
import { Fragment } from "react";
import classes from '../styles/Home.module.css'
const login = () => {
  return (
    <Fragment >
      <div className={classes.login_background}>
      <LoginForm />
      </div>
    </Fragment>
  );
};
export default login;
