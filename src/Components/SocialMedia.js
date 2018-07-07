import React from 'react';
import facebook from '../Assets/Icons/face.png';
import youtube from '../Assets/Icons/you.png';
import twitter from '../Assets/Icons/twit.png';
import instagram from '../Assets/Icons/ins.png';
import '../Css/SocialMedia.css';

const SocialMedia = () => {
  return (
    <div id="socialMediaIcons">
      <img className="socialMediaImages" src={facebook} alt="Facebook" />
      <img className="socialMediaImages" src={youtube} alt="Youtube" />
      <img className="socialMediaImages" src={twitter} alt="Twitter" />
      <img className="socialMediaImages" src={instagram} alt="Instagram" />
    </div>
  );
};

export default SocialMedia;
