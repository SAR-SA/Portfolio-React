import React from 'react';
import AboutPic from '../components/AboutPic';
import Summary from '../components/Summary';
import Nav from '../components/Nav';
import Languges from '../components/Languges';
import "../styles/About.css"
import Footer from '../components/Footer'
import SimpleContainer from '../components/Container';

const About = () => {
    return (
        <div>
        <Nav />
        {/* <SimpleContainer> */}
            <h1 className="aboutTitle">About</h1>
            <Summary />
            <AboutPic />
            <Languges />
        {/* </SimpleContainer> */}
        <Footer />
        </div>
        
    );
};

export default About;