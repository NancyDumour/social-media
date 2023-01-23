import React from "react";
import styles from "./CloseFriends.module.scss";

const CloseFriends = ({ user }) => {
  return (
    <li className={styles.sidebarFriend}>
      <img
        className={styles.sidebarFriendImg}
        src={user.profilePicture}
        alt=""
      />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
};

export default CloseFriends;
