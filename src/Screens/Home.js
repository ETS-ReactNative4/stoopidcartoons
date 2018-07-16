import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../Css/Home.css';

import HomeGallery from '../Components/HomeGallery';
// import { Link } from 'react-router-dom';

import { LatestGames, googlePlay } from '../Assets/index';

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
        <div id="home-gallery">
          <HomeGallery />
        </div>

        {/* START!!! */}

        <div
          id="start"
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
              <a href={this.state.data[7]} target="_blank">
                YouTube
              </a>
              <br />
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
                <a href={this.state.data[9]} target="_blank">
                  <img src={googlePlay} alt="Download now from GooglePlay" />
                </a>
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
        </div>

        {/* END!!! */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 3%'
          }}
        >
          <h3>
            <strong>Latest Games</strong>
          </h3>
          <h3>
            <span>
              <strong>
                {/* <Link to="/games" style={{ width: '150px' }}> */}
                All Games
                {/* </Link> */}
              </strong>
            </span>
          </h3>
        </div>
        {LatestGames.map(i => {
          return (
            <img
              className="latest-games"
              src={i[0]}
              onClick={() => {
                document.querySelector('#home-gallery').style.display = 'none';
                document.querySelector('#start').style.display = 'block';
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
