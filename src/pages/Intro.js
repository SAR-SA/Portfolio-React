import React from 'react';
import "../styles/Intro.css";



const Intro = () => {
    return (
        <div className="introDiv">
            <div introContent>
                <h1 className="introTitle">Welcome</h1>
                <h1 className="introName">My Name is Shawn A. Rather</h1>
                <h2 className="introSummary">I'm a full stack web developer</h2>
                <a href="/about" className="introButton ">View my Work</a>
            </div>

        </div>
    );
};

export default Intro;