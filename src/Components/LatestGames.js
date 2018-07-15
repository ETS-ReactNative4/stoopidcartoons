import React from "react";
import { LatestGamesCovers } from "../Assets/index";
import { Link } from "react-router-dom";
import "../Css/LatestGames.css";
import Test from "./Test";

const LatestGames = props => {
  return (
    <div
      style={{
        margin: "0 5%"
      }}
    >
      <Test />
      <div className="latest-games-div">
        <span className="latest-games-span">Latest Games</span>
        <Link to="/games">
          <span
            className="latest-games-span"
            onClick={() => window.scroll(0, 0)}
          >
            View All>
          </span>
        </Link>
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
