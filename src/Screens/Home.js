import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../Css/Home.css';

import HomeGallery from '../Components/HomeGallery';
import { Link } from 'react-router-dom';

import { LatestGames, googlePlay } from '../Assets/index';

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  ViberShareButton
} from 'react-share';

import {
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  ViberIcon
} from 'react-share';

let test = 'www.stoopidcartoons.com';

class Home extends Component {
  state = {
    data: [null, null, null, null, null, null, null, null, null, test]
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

          <div className="latest-games-wapper">
            {/* Text div */}
            <div className="description-text">
              <h1 className="h1-tags">CATEGORY:</h1>
              {this.state.data[6]} <br />
              <h1 className="h1-tags">PUBLISHER:</h1>
              St00pid Cart00ns <br />
              <h1 className="h1-tags">GAMEPLAY VIDEO:</h1>
              <a
                style={{ padding: '5px', fontSize: '17px' }}
                href={this.state.data[7]}
                target="_blank"
              >
                {this.state.data[10]}
              </a>
              <br />
              <h1 className="h1-tags">OVERVIEW</h1>
              <div>{this.state.data[8]}</div>
              {/* DownloadLinksDiv */}
              <div
                style={{
                  marginTop: '5%'
                }}
              >
                <a
                  style={{ padding: '0' }}
                  href={this.state.data[9]}
                  target="_blank"
                >
                  <img src={googlePlay} alt="Download now from GooglePlay" />
                </a>
              </div>
              {/* Share it div */}
              <div
                style={{
                  marginTop: '5%'
                }}
              >
                <h1 className="h1-tags">Share It On:</h1>
                <div
                  style={{
                    display: 'flex',
                    margin: '3px'
                  }}
                >
                  <FacebookShareButton
                    quote="Check Out This Amazing Game"
                    className="share-icons"
                    url={this.state.data[9]}
                  >
                    <FacebookIcon className="share-icons" size={25} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    title="Check Out This Amazing Game"
                    via="www.stoopidcartoons.com"
                    className="share-icons"
                    url={this.state.data[9]}
                  >
                    <TwitterIcon className="share-icons" size={25} round />
                  </TwitterShareButton>
                  <GooglePlusShareButton
                    className="share-icons"
                    url={this.state.data[9]}
                  >
                    <GooglePlusIcon className="share-icons" size={25} round />
                  </GooglePlusShareButton>
                  <RedditShareButton
                    title="Check Out This Amazing Game"
                    className="share-icons"
                    url={this.state.data[9]}
                  >
                    <RedditIcon className="share-icons" size={25} round />
                  </RedditShareButton>
                  <LinkedinShareButton
                    title="Check Out This Amazing Game"
                    description="Another Amazing Game From the Developers at www.stoopidcartoons.com"
                    className="share-icons"
                    url={this.state.data[9]}
                  >
                    <LinkedinIcon className="share-icons" size={25} round />
                  </LinkedinShareButton>
                  <WhatsappShareButton
                    title="Check Out This Amazing Game"
                    className="share-icons"
                    url={this.state.data[9]}
                  >
                    <WhatsappIcon className="share-icons" size={25} round />
                  </WhatsappShareButton>
                  <ViberShareButton
                    title="Check Out This Amazing Game"
                    className="share-icons"
                    url={this.state.data[9]}
                  >
                    <ViberIcon className="share-icons" size={25} round />
                  </ViberShareButton>
                </div>
              </div>
            </div>

            {/* Small Gallery Div */}
            <div className="small-gallery">
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
          <Link
            style={{ padding: 0, fontSize: '16px' }}
            to="/games"
            onClick={() => window.scroll(0, 0)}
          >
            <h3>
              <span>
                <strong>ALL GAMES ></strong>
              </span>
            </h3>
          </Link>
        </div>
        <div className="inline-block-div">
          {LatestGames.map(i => {
            return (
              <div key={i} className="picture-size-controller">
                <img
                  className="latest-games"
                  src={i[0]}
                  key={i}
                  onClick={() => {
                    document.querySelector('#home-gallery').style.display =
                      'none';
                    document.querySelector('#start').style.display = 'block';
                    this.setState({ data: i });
                    window.scroll(0, 0);
                  }}
                  alt=""
                />
                <div
                  className="game-name-div"
                  onClick={() => {
                    document.querySelector('#home-gallery').style.display =
                      'none';
                    document.querySelector('#start').style.display = 'block';
                    this.setState({ data: i });
                    window.scroll(0, 0);
                  }}
                >
                  {i[11]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
