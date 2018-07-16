import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Home from './Screens/Home';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import Games from './Screens/Games';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import Footer from '../src/Components/Footer';

import './Css/Navigation.css';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            marginLeft: '10%',
            marginRight: '10%'
          }}
        >
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/privacy" component={PrivacyPolicy} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
