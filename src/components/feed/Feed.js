import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import styles from "./Feed.module.scss";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Share />
        {Posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
