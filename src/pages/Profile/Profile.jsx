import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import PostSide from "../../components/PostSide/PostSide";
import "./Profile.css";
import RightSide from "../../components/RightSide/RightSide";
const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profileCenter">
        <ProfileCard/>
        <PostSide/>
      </div>

      <RightSide/>
    </div>
  );
};

export default Profile;
