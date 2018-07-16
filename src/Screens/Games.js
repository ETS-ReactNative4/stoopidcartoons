import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../Css/Home.css';

import AboutUsCoverImage from '../Components/AboutUsCoverImage';

import { arrayForMap, googlePlay } from '../Assets/index';

class Home extends Component {
  state = {
    data: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  };

  render() {
    const images = [
      {
        original: this.state.data[2]
      },
      {
        original: this.state.data[3]
      },
      {
        original: this.state.data[4]
      },
      {
        original: this.state.data[5]
      }
    ];

    return (
      <div>
        <div id="AboutUsCoverImage">
          <AboutUsCoverImage />
        </div>

        {/* START!!! */}

        <div
          id="startGames"
          style={{
            display: 'none'
          }}
        >
          {/* BigImageCoverDiv */}
          <div className="big-cover-image">
            <img
              style={{ width: '100%', borderRadius: '15px' }}
              src={this.state.data[1]}
              alt=" "
            />
          </div>

          <div
            style={{
              display: 'flex'
            }}
          >
            {/* Text div */}
            <div
              style={{
                width: '50%',
                height: 'auto'
              }}
            >
              <strong>CATEGORY:</strong>
              {this.state.data[6]} <br />
              <strong>PUBLISHER:</strong>
              St00pid Cart00ns <br />
              <strong>GAMEPLAY VIDEO:</strong>
              {this.state.data[7]} <br />
              <h3>
                <strong>OVERVIEW</strong>
              </h3>
              <br />
              <div>{this.state.data[8]}</div>
              {/* DownloadLinksDiv */}
              <div
                style={{
                  marginTop: '5%'
                }}
              >
                {this.state.data[9]}
                <img src={googlePlay} alt="Download now from GooglePlay" />
              </div>
              {/* Share it div */}
              <div
                style={{
                  marginTop: '5%'
                }}
              >
                Shate It
              </div>
            </div>

            {/* Small Gallery Div */}
            <div
              style={{
                width: '50%',
                height: '50%',
                overflow: 'hidden'
              }}
            >
              <ImageGallery
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                showBullets={true}
                infinite={true}
                autoPlay={true}
                slideInterval={5000}
                items={images}
              />
            </div>
          </div>

          {/* all other games div */}
          <div>
            <h2>
              <strong>Other Games</strong>
            </h2>
          </div>
        </div>

        {/* END!!! */}

        {arrayForMap.map(i => {
          return (
            <img
              className="latest-games"
              src={i[0]}
              onClick={() => {
                document.querySelector('#AboutUsCoverImage').style.display =
                  'none';
                document.querySelector('#startGames').style.display = 'block';
                this.setState({ data: i });
                window.scroll(0, 0);
              }}
              style={{ cursor: 'pointer' }}
              alt=""
            />
          );
        })}
      </div>
    );
  }
}

export default Home;

// import React from 'react';
// import AboutUsCoverImage from '../Components/AboutUsCoverImage';
// import AllGamesComponent from '../Components/AllGamesComponent';

// import '../Css/Games.css';

// const Games = () => {
//   return (
//     <div>
//       <AboutUsCoverImage />
//       <AllGamesComponent />
//     </div>
//   );
// };

// export default Games;
