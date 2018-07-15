import React from 'react';
import { aboutUsCover } from '../Assets/index';
import '../Css/AboutUsCoverImage.css';

const AboutUsCoverImage = () => {
  return (
    <div className="big-cover-image">
      <img style={{ width: '100%' }} src={aboutUsCover} alt=" " />
    </div>
  );
};

export default AboutUsCoverImage;
