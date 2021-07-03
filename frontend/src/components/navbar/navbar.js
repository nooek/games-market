import React from "react";
import "./styles.css";
import Logo from "../../assets/images/logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-text-container">
        <img src={Logo} alt="Logo" className="logo" />
        <h2 className="text">YOG</h2>
      </div>
      <div className="func-container">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
