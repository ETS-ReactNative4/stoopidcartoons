import React, { Component } from "react";
import "../Css/Navigation.css";
import { Link, NavLink } from "react-router-dom";
import { LogoImage } from "../Assets/index";

import { SocialMediaIcons } from "../Assets/index";

const burgerToggle = () => {
  let linksEl = document.querySelector(".narrowLinks");
  if (linksEl.style.display === "block") {
    linksEl.style.display = "none";
  } else {
    linksEl.style.display = "block";
  }
};

class Navigation extends Component {
  render() {
    return (
      <div id="navigationBorder">
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <ul>
                <NavLink
                  exact
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      document.querySelector("#home-gallery").style.display =
                        "block";
                      document.querySelector("#start").style.display = "none";
                    }, 10);
                  }}
                >
                  Home
                </NavLink>

                <NavLink
                  exact
                  to="/games"
                  onClick={() => {
                    setTimeout(() => {
                      document.querySelector(
                        "#AboutUsCoverImage"
                      ).style.display =
                        "block";
                      document.querySelector("#startGames").style.display =
                        "none";
                    }, 10);
                  }}
                >
                  Games
                </NavLink>

                <NavLink exact to="/aboutus">
                  About
                </NavLink>
                <NavLink exact to="/contactus">
                  Contact
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="navNarrow">
            <img
              src={LogoImage}
              alt="logo"
              className="pulsingLogo"
              onClick={burgerToggle}
            />

            <div className="narrowLinks">
              <ul>
                <NavLink
                  style={{ padding: "0" }}
                  exact
                  to="/"
                  onClick={() => {
                    setTimeout(function() {
                      document.querySelector("#home-gallery").style.display =
                        "block";
                      document.querySelector("#start").style.display = "none";
                    }, 10);
                  }}
                >
                  <li onClick={burgerToggle}>HOME</li>
                </NavLink>
                <NavLink
                  style={{ padding: "0" }}
                  to="/games"
                  onClick={() => {
                    setTimeout(function() {
                      document.querySelector(
                        "#AboutUsCoverImage"
                      ).style.display =
                        "block";
                      document.querySelector("#startGames").style.display =
                        "none";
                    }, 10);
                  }}
                >
                  <li onClick={burgerToggle}>GAMES</li>
                </NavLink>
                <NavLink style={{ padding: "0" }} to="/aboutus">
                  <li onClick={burgerToggle}>ABOUT</li>
                </NavLink>
                <NavLink style={{ padding: "0" }} to="/contactus">
                  <li onClick={burgerToggle}>CONTACT</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>

        <div id="socialMediaImageNavigation">
          <a
            style={{ padding: "0" }}
            href="https://www.facebook.com/StoopidCartoons/?fref=ts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialMediaIconsNavigation"
              src={SocialMediaIcons[0]}
              alt="Facebook"
            />
          </a>

          <a
            style={{ padding: "0" }}
            href="https://twitter.com/St00pidCart00ns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialMediaIconsNavigation"
              src={SocialMediaIcons[2]}
              alt="Twitter"
            />
          </a>

          <a
            style={{ padding: "0" }}
            href="https://www.instagram.com/st00pid_cart00ns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialMediaIconsNavigation"
              src={SocialMediaIcons[3]}
              alt="Instagram"
            />
          </a>

          <a
            style={{ padding: "0" }}
            href="https://www.youtube.com/channel/UCU-228KOXPG3jMgffbNV1Gg?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialMediaIconsNavigation"
              src={SocialMediaIcons[1]}
              alt="Youtube"
            />
          </a>

          <a
            style={{ padding: "0" }}
            href="https://play.google.com/store/apps/dev?id=9103063599459576814"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialMediaIconsNavigation"
              src={SocialMediaIcons[4]}
              alt="Google Play"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;
