import React from 'react';
import "../styles/AboutPic.css";
import pic from '../assets/Image1.JPG'


const AboutPic = () => {
	return ( 
        <div className="pic-container animate__animated animate__fadeInLeft mr-5 mb-5">
            <img id="picMe" src={pic} alt=""/>
        </div>
    );
}

export default AboutPic;