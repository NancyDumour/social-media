import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";

import styles from "./Feed.module.scss";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get(`/posts/timeline/${user._id}`);
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        }),
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {(!username || username === user.username) && <Share />}
        {posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
