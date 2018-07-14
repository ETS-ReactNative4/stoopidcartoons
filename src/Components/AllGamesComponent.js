import React from 'react';
import { AllGames } from '../Assets/index';

const AllGamesComponent = () => {
  return (
    <div style={{ margin: '0 5%' }}>
      {AllGames.map(i => {
        return <img className="latest-games" key={i} src={i} alt={i} />;
      })}
    </div>
  );
};

export default AllGamesComponent;
