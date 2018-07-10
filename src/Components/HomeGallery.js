import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../Css/HomeGallery.css';

/*nazivo import only for testing...will change this later */
import image1 from '../Assets/Games/BabyPhone/nas.png';
import image2 from '../Assets/Games/BalkanRoads/balkan.png';
import image3 from '../Assets/Games/CowboyDuel/naslovna.png';

/*nazivo import only for testing...will change this later */

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
      slideInterval: 2000
    };
  }
  render() {
    this.images = [
      {
        original: image1
      },
      {
        original: image2
      },
      {
        original: image3
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
        autoPlay={true} /*Change this later to true */
        items={this.images}
      />
    );
  }
}

export default HomeGallery;
