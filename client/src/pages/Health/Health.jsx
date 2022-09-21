import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from"./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./health.scss"


const Health = () => {
  return (
    <div className="app">
    <Topbar/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Contact/>
    </div>
    </div>
  );
}

export default Health;
