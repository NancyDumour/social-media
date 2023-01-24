import React from "react";
import styles from "./Online.module.scss";
const Online = ({ user }) => {
  const publicPhoto = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className={styles.root}>
      <div className={styles.imgContainer}>
        <img
          className={styles.profileImg}
          src={publicPhoto + user.profilePicture}
          alt=""
        />
        <span className={styles.online} />
      </div>
      <span className={styles.username}>{user.username}</span>
    </li>
  );
};

export default Online;
