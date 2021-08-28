import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { useState, useEffect } from "react";
import styles from "./Authorization.module.css";
import { Link, useHistory } from "react-router-dom";

const Authorization = (props) => {

  const [authTypeSignin, setAuthTypeSignin] = useState(true);
  return (
    <div className={styles.auth}>
      <div className={styles.auth__wrapper}>
        <div className={styles.auth__logo}>
          <div to="/" style={{ textDecoration: "none" }}>
            lol
          </div>
          <div
            className={styles.setAuthType__btn}
            onClick={() => setAuthTypeSignin(!authTypeSignin)}
          >
            {authTypeSignin ? "Create an account" : "Log into account"}
          </div>
        </div>
        <div className={styles.auth__type}>
          {authTypeSignin ? (
            <Signin authData={props.authData} signin={props.signin} />
          ) : (
            <Signup authData={props.authData} signup={props.signup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
