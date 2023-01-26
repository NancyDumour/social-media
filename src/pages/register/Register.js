import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.scss";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <form className={styles.box} onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              ref={username}
              className={styles.loginInput}
              required
            />
            <input
              placeholder="Email"
              ref={email}
              className={styles.loginInput}
              type="email"
              required
            />
            <input
              placeholder="Password"
              ref={password}
              className={styles.loginInput}
              type="password"
              minLength="6"
              required
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className={styles.loginInput}
              type="password"
              required
            />
            <button className={styles.loginButton} type="submit">
              Sign Up
            </button>
            <button className={styles.register}>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
