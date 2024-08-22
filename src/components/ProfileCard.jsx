import React from "react";
import "./ProfileCard.css"; // CSS dosyasını ekliyoruz

const ProfileCard = ({ name, title, imageUrl }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
