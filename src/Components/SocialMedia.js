import React from "react";
// import facebook from '../Assets/Icons/face.png';
// import youtube from '../Assets/Icons/you.png';
// import twitter from '../Assets/Icons/twit.png';
// import instagram from '../Assets/Icons/ins.png';
import { SocialMediaIcons } from "../Assets/index";
import "../Css/SocialMedia.css";

const SocialMedia = () => {
  return (
    <div id="socialMediaIcons">
      <a
        style={{ padding: "0" }}
        href="https://www.facebook.com/StoopidCartoons/?fref=ts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="socialMediaImages"
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
          className="socialMediaImages"
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
          className="socialMediaImages"
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
          className="socialMediaImages"
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
          className="socialMediaImages"
          src={SocialMediaIcons[4]}
          alt="Google Play"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
