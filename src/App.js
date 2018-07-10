import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Particles from 'react-particles-js';
import HomeGallery from '../src/Components/HomeGallery';

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
            marginLeft: '15%',
            marginRight: '15%'
          }}
        >
          <Header />
          <div id="home-gallery">
            <HomeGallery />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
