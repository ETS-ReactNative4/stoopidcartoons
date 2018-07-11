import React from 'react';
// import facebook from '../Assets/Icons/face.png';
// import youtube from '../Assets/Icons/you.png';
// import twitter from '../Assets/Icons/twit.png';
// import instagram from '../Assets/Icons/ins.png';
import { SocialMediaIcons } from '../Assets/index';
import '../Css/SocialMedia.css';

const SocialMedia = () => {
  return (
    <div id="socialMediaIcons">
      <img
        className="socialMediaImages"
        src={SocialMediaIcons[0]}
        alt="Facebook"
      />
      <img
        className="socialMediaImages"
        src={SocialMediaIcons[1]}
        alt="Youtube"
      />
      <img
        className="socialMediaImages"
        src={SocialMediaIcons[2]}
        alt="Twitter"
      />
      <img
        className="socialMediaImages"
        src={SocialMediaIcons[3]}
        alt="Instagram"
      />
    </div>
  );
};

export default SocialMedia;
