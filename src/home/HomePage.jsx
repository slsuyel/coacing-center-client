import React from 'react';
import Hero from './Hero';
import Program from './Program';
import SuccessStory from './SuccessStory';
import AboutUs from './AboutUs';
import Features from './Features';
const HomePage = () => {
    return (
        <div>
            <Hero />
            <Program />
            <Features />
            <AboutUs />
            <SuccessStory />

        </div>
    );
};

export default HomePage;