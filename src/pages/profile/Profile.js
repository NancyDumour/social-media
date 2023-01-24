import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import styles from "./Profile.module.scss";

export default function Profile() {
  const publicPhoto = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.coverImg}
                src={`${publicPhoto}post/3.jpeg`}
                alt=""
              />
              <img
                className={styles.userImg}
                src={`${publicPhoto}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className={styles.info}>
              <h4 className={styles.infoName}>Safak Kocaoglu</h4>
              <span className={styles.infoDescription}>Hello my friends!</span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
