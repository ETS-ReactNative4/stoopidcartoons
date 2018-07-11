import React from 'react';
import { LatestGamesCovers } from '../Assets/index';
import '../Css/LatestGames.css';

const LatestGames = props => {
  return (
    <div
      style={{
        margin: '0 5%'
      }}
    >
      <div id="latest-games-div">
        <span className="latest-games-span">Latest Games</span>
        <span className="latest-games-span">View All></span>
      </div>
      <div>
        {LatestGamesCovers.map(i => {
          return <img className="latest-games" key={i} src={i} alt={i} />;
        })}
      </div>
    </div>
  );
};

export default LatestGames;
