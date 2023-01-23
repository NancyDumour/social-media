import React from "react";
import styles from "./Login.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>Lamasocial</h3>
          <span className={styles.loginDesc}>
            Connect with your friends and the world around you on Lamasocial
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
            <input placeholder="Email" className={styles.loginInput} />
            <input placeholder="Password" className={styles.loginInput} />
            <button className={styles.loginButton}>Log In</button>
            <span className={styles.loginForgot}>Forgot Password?</span>
            <button className={styles.loginRegisterButton}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
