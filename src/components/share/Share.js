import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import styles from "./Share.module.scss";

const Share = () => {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img
            src="/assets/person/1.jpeg"
            className={styles.shareProfileImg}
            alt=""
          />
          <input
            placeholder="What's in your mind?"
            className={styles.shareInput}
          />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <PermMedia className={styles.shareIcon} htmlColor="tomato" />
              <span className={styles.shareOptionText}>Photo or Video</span>
            </div>
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
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
