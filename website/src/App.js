import React from 'react'
import SmoothScroll from 'smooth-scroll'

import Menu from "./Menu"
import LandingScreen from "./LandingScreen"
import About from "./About";
import Portfolio from "./Portfolio";

import './App.css';
import Achievements from "./Achievements";
import KindWords from "./KindWords";
import Footer from "./Footer";

const App = () => {

  // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
  const withScrollableAnchor = (Component, anchor) => <><a id={anchor}></a><Component /></>

  new SmoothScroll('a[href*="#"]') 

  return <div className="app">
    <Menu />
    { withScrollableAnchor(LandingScreen, 'home') }
    { withScrollableAnchor(About, 'about') }
    { withScrollableAnchor(Portfolio, 'portfolio') }
    { withScrollableAnchor(Achievements, 'achievements') }
    { withScrollableAnchor(KindWords, 'kind-words') }
    { withScrollableAnchor(Footer, 'contact') }
  </div>
}

export default App;
