import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const GeneralPage = () => {
  const generalLinkStyle = {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none"
  };

  return (
    <div className="changeinfo-container">
      <h2 className="changeinfo-title">What do you want to change?</h2>
      <div className="changeinfo-btns-general-container">
        <div className="changeinfo-options-container">
          <Link to="/profile/changeinfo/username" style={generalLinkStyle}>
            <button className="changeinfo-options-btn">Username</button>
          </Link>
          <Link to="/profile/changeinfo/email" style={generalLinkStyle}>
            <button className="changeinfo-options-btn">Email</button>
          </Link>
          <Link to="/profile/changeinfo/password" style={generalLinkStyle}>
            <button className="changeinfo-options-btn">Password</button>
          </Link>
        </div>
        <div className="changeinfo-done-btn-container">
          <Link to="/" styles={generalLinkStyle}>
            <button className="changeinfo-done-btn">Done</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
