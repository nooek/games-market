import React from "react";
import { Link } from "react-router-dom";
import "./notLoggedStyles.css"

const NotLogged = () => {
  return (
    <div className="func-container-notlogged">
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
      <Link to="/register">
        <button className="register-btn">Register</button>
      </Link>
    </div>
  );
};

export default NotLogged;
