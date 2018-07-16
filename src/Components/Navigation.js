import React, { Component } from 'react';
import '../Css/Navigation.css';
import { Link } from 'react-router-dom';
import { LogoImage } from '../Assets/index';

import { SocialMediaIcons } from '../Assets/index';

const burgerToggle = () => {
  let linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
    linksEl.style.display = 'none';
  } else {
    linksEl.style.display = 'block';
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
                      document.querySelector('#home-gallery').style.display =
                        'block';
                      document.querySelector('#start').style.display = 'none';
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
                        '#AboutUsCoverImage'
                      ).style.display =
                        'block';
                      document.querySelector('#startGames').style.display =
                        'none';
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
          <a
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
