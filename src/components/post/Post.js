import React, { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import styles from "./Post.module.scss";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const publicPhoto = process.env.REACT_APP_PUBLIC_FOLDER;

  const user = Users.filter((user) => user.id === post.userId)[0].username;
  const profilePicture = Users.filter((user) => user.id === post.userId)[0]
    .profilePicture;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              src={publicPhoto + profilePicture}
              alt=""
              className={styles.profileImg}
            />
            <span className={styles.username}>{user}</span>
            <span className={styles.date}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post.desc}</span>
          <img
            src={publicPhoto + post.photo}
            alt=""
            className={styles.postImg}
          />
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
