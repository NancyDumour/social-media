import React from "react";

import styles from "./CloseFriends.module.scss";

const CloseFriends = ({ user }) => {
  const publicPhoto = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className={styles.root}>
      <img
        className={styles.friendImg}
        src={publicPhoto + user.profilePicture}
        alt=""
      />
      <span className={styles.friendName}>{user.username}</span>
    </li>
  );
};

export default CloseFriends;
