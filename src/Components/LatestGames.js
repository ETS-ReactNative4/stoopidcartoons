import React from 'react';

import image1 from '../Assets/Games/BabyPhone/nas.png';
import image2 from '../Assets/Games/BalkanRoads/balkan.png';
import image3 from '../Assets/Games/CowboyDuel/naslovna.png';

const images = [image1, image2, image3];

const LatestGames = props => {
  return (
    <div>
      {images.map(i => {
        return <img key={i} src={i} alt={i} />;
      })}
    </div>
  );
};

export default LatestGames;
