import React from "react";
import "../Css/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul id="navigationUl">
        <NavLink to="/">
          <li className="navigationLi">Home</li>
        </NavLink>
        <NavLink to="/games">
          <li className="navigationLi">Games</li>
        </NavLink>
        <NavLink to="aboutus">
          <li className="navigationLi">About</li>
        </NavLink>
        <NavLink to="contactus">
          <li className="navigationLi">Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
