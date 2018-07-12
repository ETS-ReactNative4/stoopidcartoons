import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "../Css/HomeGallery.css";
import { GameCovers } from "../Assets/index";

class HomeGallery extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: false,
      slideDuration: 450,
      slideInterval: 3000
    };
  }
  render() {
    this.images = [
      {
        original: GameCovers[0]
      },
      {
        original: GameCovers[2]
      },
      {
        original: GameCovers[3]
      },
      {
        original: GameCovers[4]
      },
      {
        original: GameCovers[5]
      },
      {
        original: GameCovers[6]
      },
      {
        original: GameCovers[7]
      },
      {
        original: GameCovers[8]
      },
      {
        original: GameCovers[9]
      },
      {
        original: GameCovers[10]
      },
      {
        original: GameCovers[1]
      },
      {
        original: GameCovers[11]
      },
      {
        original: GameCovers[12]
      },
      {
        original: GameCovers[13]
      },
      {
        original: GameCovers[14]
      },
      {
        original: GameCovers[15]
      },
      {
        original: GameCovers[16]
      },
      {
        original: GameCovers[17]
      },
      {
        original: GameCovers[18]
      }
    ];

    return (
      <ImageGallery
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        showBullets={true}
        infinite={true}
        autoPlay={false} /*Change this later to true */
        items={this.images}
      />
    );
  }
}

export default HomeGallery;
