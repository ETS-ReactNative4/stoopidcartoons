import React from "react";
import "../Css/Logo.css";
import { LogoImage } from "../Assets/index";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <img id="logo" src={LogoImage} alt="" />
    </NavLink>
  );
};

export default Logo;
