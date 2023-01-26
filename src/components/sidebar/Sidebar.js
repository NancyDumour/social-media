import React from "react";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import CloseFriends from "../closeFriends/CloseFriends";
import { Users } from "../../dummyData";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <RssFeed className={styles.icon} />
            <span className={styles.sidebarListItemText}>Feed</span>
          </li>
          <li className={styles.listItem}>
            <Chat className={styles.icon} />
            <span className={styles.sidebarListItemText}>Chats</span>
          </li>
          <li className={styles.listItem}>
            <PlayCircleFilledOutlined className={styles.icon} />
            <span className={styles.sidebarListItemText}>Videos</span>
          </li>
          <li className={styles.listItem}>
            <Group className={styles.icon} />
            <span className={styles.sidebarListItemText}>Groups</span>
          </li>
          <li className={styles.listItem}>
            <Bookmark className={styles.icon} />
            <span className={styles.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={styles.listItem}>
            <HelpOutline className={styles.icon} />
            <span className={styles.sidebarListItemText}>Questions</span>
          </li>
          <li className={styles.listItem}>
            <WorkOutline className={styles.icon} />
            <span className={styles.sidebarListItemText}>Jobs</span>
          </li>
          <li className={styles.listItem}>
            <Event className={styles.icon} />
            <span className={styles.sidebarListItemText}>Events</span>
          </li>
          <li className={styles.listItem}>
            <School className={styles.icon} />
            <span className={styles.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={styles.sidebarButton}>Show More</button>
        <hr className={styles.sidebarHr} />
        <ul className={styles.firendsList}>
          {Users.map((user) => {
            return <CloseFriends key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}
