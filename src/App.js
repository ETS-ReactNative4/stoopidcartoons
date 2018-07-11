import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Particles from 'react-particles-js';
import HomeGallery from '../src/Components/HomeGallery';
import LatestGames from '../src/Components/LatestGames';
import Footer from '../src/Components/Footer';

const particlesOptions = {
  particles: {
    number: {
      value: 190,
      density: {
        enable: true
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="particles">
          <Particles params={particlesOptions} />
        </div>
        <div
          style={{
            marginLeft: '10%',
            marginRight: '10%'
          }}
        >
          <Header />
          <div id="home-gallery">
            <HomeGallery />
            <LatestGames />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
