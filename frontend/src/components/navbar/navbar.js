import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyles.css";
import Logo from "../../assets/images/logo.svg"
import NotLogged from "./notLogged/notLogged";
import Logged from "./logged/logged";
import MobileMenu from "./mobileMenu/mobileMenu"

const Navbar = () => {
  const isLogged = localStorage.getItem("jwt")
  
  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="logo-text-container">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="text">YOG</h2>
        </div>
      </Link>
      <MobileMenu />
      {
        !isLogged
          ? <NotLogged />
          : <Logged />
      }
    </div>
  );
};

export default Navbar;
