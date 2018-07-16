import React from 'react';
import AboutUsCoverImage from '../Components/AboutUsCoverImage';
import { SocialMediaIcons } from '../Assets/index';
import '../Css/ContactUs.css';

const ContactUs = () => {
  return (
    <div
      style={{
        color: 'white'
      }}
    >
      <AboutUsCoverImage />
      <div>
        <h1>Write To Us</h1>
        <p>
          If you love our games, have some suggestions, or simply want to chat,
          then we want to hear from you!
        </p>

        <h4>Please email us at the following addresse:</h4>

        <strong>stoopidcartoons@gmail.com</strong>

        <h1>FOLLOW US</h1>
        <p>
          Get more info about our games, latest news and share your opinion with
          other people!
        </p>
        <div>
          <div id="socialMediaContactUsIcons">
            <a
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

export default ContactUs;
