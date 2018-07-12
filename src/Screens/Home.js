import React from "react";

import HomeGallery from '../Components/HomeGallery';
import LatestGames from '../Components/LatestGames';

const home = () => (
  <div>
    <div id="home-gallery">
      <HomeGallery />
    </div>
    <LatestGames />
  </div>
);

export default home;
