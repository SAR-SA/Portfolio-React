import React from 'react';
import Avatar from '../assets/Avatar.JPG';

import * as ReactBootstrap from "react-bootstrap";


function Footer() {
  return (
    <div class="container-fluid">
      <div class="link-btns row">
        <a class="gitBtn fab fa-github fa-4x ml-5 mr-5" href="https://github.com/SAR-SA"></a>
        <a class="liBtn fab fa-linkedin-in fa-4x ml-5 mr-5"
          href="https://www.linkedin.com/in/shawn-a-rather-9a37ba56/"></a>
        <a class="emBtn far fa-envelope fa-4x ml-5 mr-5" href="mailto:SARSA.web@gmail.com"></a>
        <a class="emBtn far fa-file-pdf fa-4x ml-5 mr-5" href="assets/Shawn A. Rather Resume.pdf"></a>
      </div>
      <image src= { Avatar } class="bottom-logo col-12"></image>
      <h2>The past can talk to the future...if the present has ears to hear and eyes to see with.</h2>
      <p class="copyright">Designed & Built by me</p>
    </div>
  )
}

export default Footer