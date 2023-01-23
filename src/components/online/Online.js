import React from "react";
import "./Online.css";
const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline" />
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
