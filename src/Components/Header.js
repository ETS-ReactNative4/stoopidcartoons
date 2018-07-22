import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div >
      <Logo />
      <SocialMedia />
      <Navigation />
    </div>
  );
};

export default Header;
