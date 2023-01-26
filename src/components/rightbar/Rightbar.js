import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import Online from "../online/Online";
import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../dummyData";

import styles from "./Rightbar.module.scss";

export default function Rightbar({ user }) {
  const publicPhoto = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
      } else {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?.id));
  }, [currentUser, user]);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const HomeRightbar = () => {
    return (
      <>
        {user?.username !== currentUser.username && (
          <button className={styles.followButton} onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
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
            <span className={styles.infoValue}>{user.city}</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.infoKey}>From:</span>
            <span className={styles.infoValue}>{user.from}</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.infoKey}>Relationship:</span>
            <span className={styles.infoValue}>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className={styles.title}>User friends</h4>
        <div className={styles.followings}>
          {friends.map((friend) => {
            <Link
              to={`/profile/${friend.username}`}
              style={{ textDecoration: "none" }}>
              <div className={styles.following}>
                <img
                  src={
                    friend.profilePicture
                      ? publicPhoto + friend.profilePicture
                      : publicPhoto + "person/noAvatar.png"
                  }
                  alt=""
                  className={styles.followingImg}
                />
                <span>{friend.username}</span>
              </div>
            </Link>;
          })}
        </div>
      </>
    );
  };
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
