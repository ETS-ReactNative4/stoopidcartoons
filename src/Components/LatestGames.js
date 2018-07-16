import React from "react";
import { LatestGamesCovers } from "../Assets/index";
import { Link } from "react-router-dom";
import "../Css/LatestGames.css";

const LatestGames = props => {
  return (
    <div
      style={{
        margin: "0 5%"
      }}
    >
      
      <div>
        {LatestGamesCovers.map(i => {
          return <img className="latest-games" key={i} src={i} alt={i} />;
        })}
      </div>
    </div>
  );
};

export default LatestGames;
