import React from "react";
import styles from "./Rightbar.module.scss";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    const publicPhoto = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <div className={styles.birthdayContainer}>
          <img
            className={styles.birthdayImg}
            src={`${publicPhoto}gift.png`}
            alt=""
          />
          <span className={styles.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className={styles.ad} src={`${publicPhoto}ad.png`} alt="" />
        <h4 className={styles.title}>Online Friends</h4>
        <ul className={styles.friendsList}>
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
        <h4 className={styles.title}>User information</h4>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoKey}>City:</span>
            <span className={styles.infoValue}>New York</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.infoKey}>From:</span>
            <span className={styles.infoValue}>Madrid</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.infoKey}>Relationship:</span>
            <span className={styles.infoValue}>Single</span>
          </div>
        </div>
        <h4 className={styles.title}>User friends</h4>
        <div className={styles.followings}>
          <div className={styles.following}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={styles.followingImg}
            />
            <span>John Carter</span>
          </div>
          <div className={styles.following}>
            <img
              src="assets/person/2.jpeg"
              alt=""
              className={styles.followingImg}
            />
            <span>John Carter</span>
          </div>
          <div className={styles.following}>
            <img
              src="assets/person/3.jpeg"
              alt=""
              className={styles.followingImg}
            />
            <span>John Carter</span>
          </div>
          <div className={styles.following}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={styles.followingImg}
            />
            <span>John Carter</span>
          </div>
          <div className={styles.following}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={styles.followingImg}
            />
            <span>John Carter</span>
          </div>
          <div className={styles.following}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={styles.followingImg}
            />
            <span>John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
