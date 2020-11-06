import React from 'react';
import Button from '../components/Button';


const Intro = () => {
    return (
            <div>
                <h1>Welcome</h1>
                <h1>My Name is Shawn A. Rather</h1>
                <h2>I'm a full stack web developer</h2>
                <Button />
                <a href="/about">View my Work</a>
            </div>
    );
};

export default Intro;