import React from "react";
import styles from "./Login.module.scss";

export default function Login() {
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
          <div className={styles.box}>
            <input placeholder="Email" className={styles.loginInput} />
            <input placeholder="Password" className={styles.loginInput} />
            <button className={styles.loginButton}>Log In</button>
            <span className={styles.forgot}>Forgot Password?</span>
            <button className={styles.registerButton}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
