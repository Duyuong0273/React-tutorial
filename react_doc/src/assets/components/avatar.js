import React from "react";
import "../styles/avatar.css";

const user = {
  name: "Sonic",
  imageUrl:
    "https://i.pinimg.com/originals/30/f2/d4/30f2d47721364e0b74dfe72137e02254.png",
  imageSize: 90,
};

export default function Avatar() {
  return (
    <>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
