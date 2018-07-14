import React from 'react';
import { AllGames } from '../Assets/index';
import AboutUsCoverImage from '../Components/AboutUsCoverImage';
import AllGamesComponent from '../Components/AllGamesComponent';

import '../Css/Games.css';

const Games = () => {
  return (
    <div>
      <AboutUsCoverImage />
      <AllGamesComponent />
    </div>
  );
};

export default Games;
