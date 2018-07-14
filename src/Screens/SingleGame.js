import React, { Component } from "react";
import AllGamesComponent from "../Components/AllGamesComponent";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import { googlePlay } from "../Assets/index";

//imports

import { BigBen } from "../Assets/index";
import "../Css/AboutUsCoverImage.css";

class SingleGame extends Component {
  render() {
    const images = [
      {
        original: BigBen[1]
      },
      {
        original: BigBen[2]
      },
      {
        original: BigBen[3]
      }
    ];

    return (
      //   main <div>
      <div>
        {/* BigImageCoverDiv */}
        <div className="big-cover-image">
          <img style={{ width: "100%" }} src={BigBen[0]} alt="Cover Image" />
        </div>

        <div
          style={{
            display: "flex"
          }}
        >
          {/* Text div */}
          <div
            style={{
              width: "50%",
              height: "auto"
            }}
          >
            <strong>CATEGORY:</strong>
            Arcade <br />
            <strong>PUBLISHER:</strong>
            St00pid Cart00ns <br />
            <strong>GAMEPLAY VIDEO:</strong>
            YouTube <br />
            <h3>
              <strong>OVERVIEW</strong>
            </h3>
            <br />
            Your bones don't break, mine do. That's clear. Your cells react to
            bacteria and viruses differently than mine. You don't get sick, I
            do. That's also clear. But for some reason, you and I react the
            exact same way to water. We swallow it too fast, we choke. We get
            some in our lungs, we drown. However unreal it may seem, we are
            connected, you and I. We're on the same curve, just on opposite
            ends.
            {/* DownloadLinksDiv */}
            <div
              style={{
                marginTop: "5%"
              }}
            >
              <img src={googlePlay} alt="Download now from GooglePlay" />
            </div>
            {/* Share it div */}
            <div
              style={{
                marginTop: "5%"
              }}
            >
              Shate It
            </div>
          </div>

          {/* Small Gallery Div */}
          <div
            style={{
              width: "50%",
              height: "50%",
              overflow: "hidden",
              borderRadius: "30px"
            }}
          >
            <ImageGallery
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              showBullets={true}
              infinite={true}
              autoPlay={true} /*Change this later to true */
              items={this.images}
              slideInterval={5000}
              items={images}
            />
          </div>
        </div>

        {/* all other games div */}
        <div>
          <h2>
            <strong>OtherGames</strong>
          </h2>
          <AllGamesComponent />
        </div>
      </div>
    );
  }
}
export default SingleGame;
