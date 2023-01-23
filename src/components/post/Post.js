import React, { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import styles from "./Post.module.scss";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const user = Users.filter((user) => user.id === post.userId)[0].username;
  const profilePicture = Users.filter((user) => user.id === post.userId)[0]
    .profilePicture;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              src={profilePicture}
              alt=""
              className={styles.postProfileImg}
            />
            <span className={styles.postUsername}>{user}</span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post.desc}</span>
          <img src={post.photo} alt="" className={styles.postImg} />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              src="assets/like.png"
              alt=""
              className={styles.likeIcon}
              onClick={likeHandler}
            />
            <img
              src="assets/heart.png"
              alt=""
              className={styles.likeIcon}
              onClick={likeHandler}
            />
            <span className={styles.postLikeCounter}>
              {like} people like it
            </span>
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
