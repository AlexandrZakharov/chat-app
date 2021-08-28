import { useState } from "react";
import styles from "../Authorization.module.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const movedLabel = {
    top: "-10px",
    left: 0,
    fontSize: "12px",
    transition: "all .14s ease",
  };

  const onSignin = (e) => {
    e.preventDefault();
    props.signin({email, password});
  };

  return (
    <div className={styles.signin}>
      <form name="signin" className={styles.auth__form}>
        <h1>Sign In</h1>
        <div
          className={
            email || emailFocused
              ? `${styles.input__wrapper} ${styles.focused}`
              : styles.input__wrapper
          }
        >
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => {
              setEmailFocused(true);
            }}
            onBlur={() => {
              setEmailFocused(false);
            }}
          />
          <label
            htmlFor="email"
            className={styles.email}
            style={email || emailFocused ? movedLabel : {}}
          >
            E-mail
          </label>
        </div>
        <div
          className={
            password || passwordFocused
              ? `${styles.input__wrapper} ${styles.focused}`
              : styles.input__wrapper
          }
        >
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => {
              setPasswordFocused(true);
            }}
            onBlur={() => {
              setPasswordFocused(false);
            }}
          />
          <label
            htmlFor="password"
            className={styles.password}
            style={password || passwordFocused ? movedLabel : {}}
          >
            Password
          </label>
        </div>
        <label htmlFor="login" className={styles.forgotPassword}>
          Forgot password?
        </label>
        {props.authData.signin.error ? (
          <div className={styles.auth__error}>
            <ErrorOutlineIcon />
            <span>{props.authData.signin.error}</span>
          </div>
        ) : (
          ""
        )}
        <div className={styles.auth__btn} onClick={onSignin}>
          Continue
        </div>
      </form>
    </div>
  );
};

export default Login;
