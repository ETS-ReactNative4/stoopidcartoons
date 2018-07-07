import React from 'react';
import facebook from '../Assets/Icons/face.png';
import youtube from '../Assets/Icons/you.png';
import twitter from '../Assets/Icons/twit.png';
import instagram from '../Assets/Icons/ins.png';
import '../Css/SocialMedia.css';

const SocialMedia = () => {
  return (
    <div id="socialMediaIcons">
      <img src={facebook} alt="Facebook" />
      <img src={youtube} alt="Youtube" />
      <img src={twitter} alt="Twitter" />
      <img src={instagram} alt="Instagram" />
    </div>
  );
};

export default SocialMedia;
