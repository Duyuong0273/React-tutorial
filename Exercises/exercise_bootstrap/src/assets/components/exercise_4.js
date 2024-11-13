import React from "react";
import FPT from "../image/FPT.png";
import "../styles/exercise_4.css";

export default function Exercise4() {
  return (
    <>
      <div className="header4">
        <img className="logo-fpt" src={FPT} />
        <div className="fpt-tabs">
          <a className="a-tabs">Home</a>
          <a className="a-tabs">About</a>
          <a className="a-tabs">Contact</a>
        </div>
      </div>
      <div className="main">
        <h4 className="about">About</h4>
        <p className="text">This is about section of the website</p>
        <h4 className="contact">Contact</h4>
        <p className="text">
          For any inquiries, please contact us at example@example.com
        </p>
      </div>
      <div className="footer4">@ 2023 Website all rights reserved</div>
    </>
  );
}
