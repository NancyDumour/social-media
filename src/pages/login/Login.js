import React, { useRef, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

import styles from "./Login.module.scss";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch,
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.logo}>React Social Media</h3>
          <span className={styles.description}>
            Connect with your friends and the world around you on React Social
            Media
          </span>
        </div>
        <div className={styles.loginRight}>
          <form className={styles.box} onSubmit={handleSubmit}>
            <input
              ref={email}
              placeholder="Email"
              type="email"
              className={styles.loginInput}
              required
            />
            <input
              ref={password}
              placeholder="Password"
              type="password"
              className={styles.loginInput}
              minLength="6"
              required
            />
            <button className={styles.loginButton} disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className={styles.forgot}>Forgot Password?</span>
            <button className={styles.registerButton} disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
