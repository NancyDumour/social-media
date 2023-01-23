import React from "react";
import styles from "./Rightbar.module.scss";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={styles.birthdayContainer}>
          <img className={styles.birthdayImg} src="assets/gift.png" alt="" />
          <span className={styles.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className={styles.rightbarAd} src="assets/ad.png" alt="" />
        <h4 className={styles.rightbarTitle}>Online Friends</h4>
        <ul className={styles.rightbarFriendList}>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={styles.rightbarTitle}>User information</h4>
        <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City:</span>
            <span className={styles.rightbarInfoValue}>New York</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From:</span>
            <span className={styles.rightbarInfoValue}>Madrid</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Relationship:</span>
            <span className={styles.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={styles.rightbarTitle}>User friends</h4>
        <div className={styles.rightbarFollowings}>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/2.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/3.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
