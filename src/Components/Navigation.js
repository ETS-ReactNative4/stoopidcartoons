import React, { Component } from "react";
import "../Css/Navigation.css";
import { Link } from "react-router-dom";
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
                <Link
                  id="teststyle"
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      document.querySelector("#home-gallery").style.display =
                        "block";
                      document.querySelector("#start").style.display = "none";
                    }, 10);
                  }}
                >
                  <li>Home</li>
                </Link>

                <Link
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
                  <li>Games</li>
                </Link>

                <Link to="/aboutus">
                  <li>About</li>
                </Link>
                <Link to="/contactus">
                  <li>Contact</li>
                </Link>
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
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(function() {
                      document.querySelector('#home-gallery').style.display =
                        'block';
                      document.querySelector('#start').style.display = 'none';
                    }, 10);
                  }}
                >
                  <li onClick={burgerToggle}>HOME</li>
                </Link>
                <Link
                  to="/games"
                  onClick={() => {
                    setTimeout(function() {
                      document.querySelector(
                        '#AboutUsCoverImage'
                      ).style.display =
                        'block';
                      document.querySelector('#startGames').style.display =
                        'none';
                    }, 10);
                  }}
                >
                  <li onClick={burgerToggle}>GAMES</li>
                </Link>
                <Link to="/aboutus">
                  <li onClick={burgerToggle}>ABOUT</li>
                </Link>
                <Link to="/contactus">
                  <li onClick={burgerToggle}>CONTACT</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <div id="socialMediaIconsNavigation">
          <img
            className="socialMediaImagesNavigation"
            src={SocialMediaIcons[0]}
            alt="Facebook"
          />
          <img
            className="socialMediaImagesNavigation"
            src={SocialMediaIcons[1]}
            alt="Youtube"
          />
          <img
            className="socialMediaImagesNavigation"
            src={SocialMediaIcons[2]}
            alt="Twitter"
          />
          <img
            className="socialMediaImagesNavigation"
            src={SocialMediaIcons[3]}
            alt="Instagram"
          />
        </div>
      </div>
    );
  }
}

export default Navigation;
