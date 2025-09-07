import { LOGO_URL } from "../utils/constants";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const HeaderComponent = () => {
  let [loginText, setLoginText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/contact">Contact Us</StyledLink>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginText === "Login"
                ? setLoginText("Logout")
                : setLoginText("Login");
            }}
          >
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;

const StyledLink = styled(RouterLink)`
  padding: 10px;
  margin: 10px;
`;
