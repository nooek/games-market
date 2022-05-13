import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
  Container,
  MenuIcon,
  Menu,
  UserInfoContainer,
  UserPfp,
  Username,
  FuncContainer,
  StoreBtn,
  NotLoggedBtns,
  NotLoggedText,
} from "./styles.js";
import { Link } from "react-router-dom";
import { useUserData } from "../../../store/userContext";
import navbarMenu from "../../../assets/images/navbar-menu.svg";
import userPfp from "../../../assets/images/profile.svg";
import BecomeDevMobile from "../../becomeDevMobile/becomeDevMobile.js";

const MobileMenu = () => {
  const { userData } = useUserData();
  const [showMenu, setShowMenu] = useState(false);
  const [becomeDev, setBecomeDev] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const isLogged = localStorage.getItem("jwt");
  const linkBtnStyle = {
    width: "100%",
  };

  const verifyDev = () => {
    if (userData.isDev) {
      setRedirect(true);
    }
    axios.get(`http://localhost:3333/api/dev/${userData.id}`).then((res) => {
      if (res.data.isDev) {
        setRedirect(true);
      } else {
        setBecomeDev(true);
      }
    });
  };

  return (
    <Container>
      <MenuIcon src={navbarMenu} alt="menu" onClick={() => setShowMenu(!showMenu)} />
      {isLogged ? (
        <Menu show={showMenu} logged={true}>
          <UserInfoContainer>
            <Link to="/profile">
              <UserPfp src={userPfp} alt="pfp" />
            </Link>
            <Username>{userData.username}</Username>
          </UserInfoContainer>
          <FuncContainer>
            <StoreBtn onClick={() => verifyDev()}>Publish a game</StoreBtn>
            {becomeDev ? <BecomeDevMobile chooseNo={() => setBecomeDev(false)} chooseYes={() => setBecomeDev(false)} /> : null}
            <StoreBtn>Store</StoreBtn>
          </FuncContainer>
          {redirect ? <Redirect to="publish/game" /> : null}
        </Menu>
      ) : (
        <Menu show={showMenu} logged={false}>
          <NotLoggedText>Register or Login</NotLoggedText>
          <Link to="/register" style={linkBtnStyle}>
            <NotLoggedBtns>Register</NotLoggedBtns>
          </Link>
          <Link to="/login" style={linkBtnStyle}>
            <NotLoggedBtns>Login</NotLoggedBtns>
          </Link>
        </Menu>
      )}
    </Container>
  );
};

export default MobileMenu;
