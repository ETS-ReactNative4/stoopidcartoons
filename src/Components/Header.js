import React from "react";
import "../Css/Header.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Logo />
      <SocialMedia />
      <Navigation />
    </div>
  );
};

export default Header;
