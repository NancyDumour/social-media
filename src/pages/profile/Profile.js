import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.profileCoverImg}
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className={styles.profileUserImg}
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>Safak Kocaoglu</h4>
              <span className={styles.profileInfoDesc}>Hello my friends!</span>
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
