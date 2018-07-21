import React from 'react';
import AboutUsCoverImage from '../Components/AboutUsCoverImage';

import { SocialMediaIcons } from '../Assets/index';
import '../Css/ContactUs.css';

const AboutUs = () => {
  return (
    <div
      style={{
        color: 'white'
      }}
    >
      <AboutUsCoverImage />
      <div>
        <h1>Who Are We</h1>
        <p style={{ fontSize: '17px' }}>
          Small team of developers who make games out of hobby
        </p>

        <h1>Overview</h1>
        <div>
          <p style={{ fontSize: '17px' }}>
            Founded in 2017, St00pid Cart00ns is a small independent team of
            developers who enjoy making casual games in their free time.
          </p>
          <p style={{ fontSize: '17px' }}>
            Our main focus are games for Android devices. So far we have
            published almost 20 games.
          </p>
          <p style={{ fontSize: '17px' }}>
            Our goal is to make games that people will enjoy and have some fun
            in the process of making them
          </p>
        </div>

        <h1>FOLLOW US ON:</h1>

        <div>
          <div id="socialMediaContactUsIcons">
            <a
              style={{ padding: '0' }}
              href="https://www.facebook.com/StoopidCartoons/?fref=ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="SocialMediaContactUs"
                src={SocialMediaIcons[0]}
                alt="Facebook"
              />
            </a>

            <a
              style={{ padding: '0' }}
              href="https://twitter.com/St00pidCart00ns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="SocialMediaContactUs"
                src={SocialMediaIcons[2]}
                alt="Twitter"
              />
            </a>

            <a
              style={{ padding: '0' }}
              href="https://www.instagram.com/st00pid_cart00ns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="SocialMediaContactUs"
                src={SocialMediaIcons[3]}
                alt="Instagram"
              />
            </a>

            <a
              style={{ padding: '0' }}
              href="https://www.youtube.com/channel/UCU-228KOXPG3jMgffbNV1Gg?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="SocialMediaContactUs"
                src={SocialMediaIcons[1]}
                alt="Youtube"
              />
            </a>

            <a
              style={{ padding: '0' }}
              href="https://play.google.com/store/apps/dev?id=9103063599459576814"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="SocialMediaContactUs"
                src={SocialMediaIcons[4]}
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
