import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
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
        <Particles id="particles" params={particlesOptions} />
        <Header />
      </div>
    );
  }
}

export default App;
