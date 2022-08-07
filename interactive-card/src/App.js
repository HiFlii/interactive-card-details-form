import React from 'react';

import './App.css';
import bgMainMobile from './images/bg-main-mobile.png';
import bgMainDesktop from './images/bg-main-desktop.png';
import bgCardFront from './images/bg-card-front.png';
import bgCardBack from './images/bg-card-back.png';
import cardLogo from './images/card-logo.svg';
import iconComplete from './images/icon-complete.svg';

import FormEntry from './FormEntry';
import Card from './Card';

const App = () => {
  return (
    <div>
      <div className = "card-stack">
        <img className = "bg-image" src={bgMainMobile}></img>
        <div className = "card-wrapper-1"><Card img={bgCardBack}/></div>
        <div className = "card-wrapper-2"><Card img={bgCardFront} logo={cardLogo}/></div>
      </div>
      <form className = "card-form">
        <FormEntry label="CARDHOLDER NAME" default = "Jame Appleseed" />
        <FormEntry label="CARD NUMBER" default = "1234 5678 9123 0000" />
        <FormEntry label="EXP. DATE (MM/YY)" default = "" />
        <FormEntry label="CVC" default = "" />
      </form>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="/">Stephen Campbell</a>.
    </div>
    </div>
  );
}

export default App;
