import React, { Component } from "react";

import HomeGallery from "../Components/HomeGallery";

import { LatestGamesCovers } from "../Assets/index";

class Home extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <div>
        <div id="home-gallery">
          <HomeGallery />
        </div>
        <img style={{ width: "100%", height: "auto" }} src={this.state.data} />

        <img
          src={LatestGamesCovers[2]}
          onClick={() => {
            document.querySelector("#home-gallery").style.display = "none";
            this.setState({ data: LatestGamesCovers[3] });
            window.scroll(0, 0);
          }}
          style={{ cursor: "pointer" }}
          alt=""
        />
        <img
          src={LatestGamesCovers[2]}
          onClick={() => {
            document.querySelector("#home-gallery").style.display = "none";
            this.setState({ data: LatestGamesCovers[1] });
            window.scroll(0, 0);
          }}
          style={{ cursor: "pointer" }}
          alt=""
        />
      </div>
    );
  }
}

export default Home;
