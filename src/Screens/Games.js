import React from 'react';
import { AllGames } from '../Assets/index';
import AboutUsCoverImage from '../Components/AboutUsCoverImage';

import '../Css/Games.css';

const Games = () => {
  return (
    <div>
      <AboutUsCoverImage />
      <div>
        {AllGames.map(i => {
          return <img className="latest-games" key={i} src={i} alt={i} />;
        })}
      </div>
    </div>
  );
};

export default Games;
