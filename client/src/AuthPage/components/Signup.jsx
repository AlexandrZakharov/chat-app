import { useState } from "react";
import styles from "../Authorization.module.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const movedLabel = {
    top: "-10px",
    left: 0,
    fontSize: "12px",
    transition: "all .14s ease",
  };

  const onSignup = (e) => {
    e.preventDefault();
    props.signup({ firstName, lastName, email, password });
  };

  return (
    <div className={styles.signup}>
      <form name="signin" className={styles.auth__form}>
        <h1>Sign Up</h1>
        <div
          className={
            firstName || firstNameFocused
              ? `${styles.input__wrapper} ${styles.focused}`
              : styles.input__wrapper
          }
        >
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={() => {
              setFirstNameFocused(true);
            }}
            onBlur={() => {
              setFirstNameFocused(false);
            }}
          />
          <label
            htmlFor="firstName"
            className={styles.email}
            style={firstName || firstNameFocused ? movedLabel : {}}
          >
            First Name
          </label>
        </div>
        <div
          className={
            lastName || lastNameFocused
              ? `${styles.input__wrapper} ${styles.focused}`
              : styles.input__wrapper
          }
        >
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onFocus={() => {
              setLastNameFocused(true);
            }}
            onBlur={() => {
              setLastNameFocused(false);
            }}
          />
          <label
            htmlFor="lastName"
            style={lastName || lastNameFocused ? movedLabel : {}}
          >
            Last Name
          </label>
        </div>
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
        {props.authData.signup.error ? (
          <div className={styles.auth__error}>
            <ErrorOutlineIcon />
            <span>{props.authData.signup.error}</span>
          </div>
        ) : (
          ""
        )}
        <div className={styles.auth__btn} onClick={onSignup}>
          Continue
        </div>
      </form>
    </div>
  );
};

export default Signup;
