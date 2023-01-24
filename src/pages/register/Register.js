import React from "react";
import styles from "./Register.module.scss";

export default function Register() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.logo}>React Social Media</h3>
          <span className={styles.description}>
            Connect with friends and the world around you on React Social Media.
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.box}>
            <input placeholder="Username" className={styles.loginInput} />
            <input placeholder="Email" className={styles.loginInput} />
            <input placeholder="Password" className={styles.loginInput} />
            <input placeholder="Password Again" className={styles.loginInput} />
            <button className={styles.loginButton}>Sign Up</button>
            <button className={styles.register}>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
