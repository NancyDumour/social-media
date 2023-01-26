import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";

import styles from "./Topbar.module.scss";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={styles.container}>
      <div className={styles.topbarLeft}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={styles.logo}>React Social Media</span>
        </Link>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <Search className={styles.searchIcon} />
          <input
            placeholder="Search for friend, post or video"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <span className={styles.link}>Homepage</span>
          <span className={styles.link}>Timeline</span>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconItem}>
            <Person />
            <span className={styles.iconBadge}>1</span>
          </div>
          <div className={styles.iconItem}>
            <Chat />
            <span className={styles.iconBadge}>2</span>
          </div>
          <div className={styles.iconItem}>
            <Notifications />
            <span className={styles.iconBadge}>1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? publicFolder + user.profilePicture
                : publicFolder + "person/noAvatar.png"
            }
            alt=""
            className={styles.topbarImg}
          />
        </Link>
      </div>
    </div>
  );
}
