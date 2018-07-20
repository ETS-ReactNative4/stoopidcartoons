import React from "react";
import "../Css/Logo.css";
import { LogoImage } from "../Assets/index";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ width: 150 }}
      >
        <Link to="/" style={{ padding: "0" }} >
          <div className="Tilt-inner pa3">
            <img id="logo" src={LogoImage} alt="" />
          </div>
        </Link>
      </Tilt>
    </div>
  );
};

export default Logo;
