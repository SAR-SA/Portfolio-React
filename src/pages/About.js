import React from 'react';
import AboutPic from '../components/AboutPic';
import Summary from '../components/Summary';
import Nav from '../components/Nav';
import Languges from '../components/Languges';
import SimpleContainer from '../components/Container';

const About = () => {
    return (
        <div>
        <div>
        <Nav />
        </div>
       
        {/* <SimpleContainer> */}
            <h1>About</h1>
            <Summary />
            <AboutPic />
            <Languges />
        {/* </SimpleContainer> */}
        </div>
    );
};

export default About;