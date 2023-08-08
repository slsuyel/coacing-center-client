import React from 'react';
import Hero from './Hero';
import Program from './Program';
import SuccessStory from './SuccessStory';
import AboutUs from './AboutUs';
import Features from './Features';
import Ticker from '../utilities/Ticker';
const HomePage = () => {
    return (
        <div>
            <Ticker />
          <Hero />
            <Program /> 
             <Features />
            <AboutUs />
            <SuccessStory />  

        </div>
    );
};

export default HomePage;