import React from 'react';
import { aboutUsCover } from '../Assets/index';
import '../Css/AboutUsCoverImage.css';

const AboutUsCoverImage = () => {
  return (
    <div>
      <img className="big-cover-image" src={aboutUsCover} alt="Cover Image" />
    </div>
  );
};

export default AboutUsCoverImage;
