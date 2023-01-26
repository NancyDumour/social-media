import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";

import styles from "./Post.module.scss";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const publicPhoto = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <Link to={`profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? publicPhoto + user.profilePicture
                    : `${publicPhoto}/person/noAvatar.png`
                }
                alt=""
                className={styles.profileImg}
              />
            </Link>
            <span className={styles.username}>{user.username}</span>
            <span className={styles.date}>{format(post.createdAt)}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post.desc}</span>
          <img src={publicPhoto + post.img} alt="" className={styles.postImg} />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              src={`${publicPhoto}like.png`}
              alt=""
              className={styles.likeIcon}
              onClick={likeHandler}
            />
            <img
              src={`${publicPhoto}heart.png`}
              alt=""
              className={styles.likeIcon}
              onClick={likeHandler}
            />
            <span className={styles.likeCounter}>{like} people like it</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
