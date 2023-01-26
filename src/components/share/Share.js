import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";

import styles from "./Share.module.scss";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const description = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      userId: user._id,
      desc: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.shareTop}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            className={styles.profileImg}
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            className={styles.shareInput}
            ref={description}
          />
        </div>
        <hr className={styles.shareHr} />
        {file && (
          <div className={styles.shareImageContainer}>
            <img
              src={URL.createObjectURL(file)}
              alt="shareImg"
              className={styles.shareImg}
            />
            <Cancel
              className={styles.cancelImg}
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className={styles.shareBottom} onSubmit={handleSubmit}>
          <div className={styles.shareOptions}>
            <label className={styles.shareOption} htmlFor="file">
              <PermMedia className={styles.shareIcon} htmlColor="tomato" />
              <span className={styles.shareOptionText}>Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            <div className={styles.shareOption}>
              <Label className={styles.shareIcon} htmlColor="blue" />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <Room className={styles.shareIcon} htmlColor="green" />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotions
                className={styles.shareIcon}
                htmlColor="goldenrod"
              />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton} type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
