import React from 'react';
import "../styles/Footer.css"
import Avatar from '../assets/Avatar.JPG';

function Footer() {
  return (
    <footer>
    <div className="container-fluid">
      <div className="link-btns row">
        <a className="gitBtn fab fa-github fa-4x ml-5 mr-5" href="https://github.com/SAR-SA" alt="Github logo"></a>
        <a className="liBtn fab fa-linkedin-in fa-4x ml-5 mr-5"
          href="https://www.linkedin.com/in/shawn-a-rather-9a37ba56/" alt="LinkedIn logo"></a>
        <a className="emBtn far fa-envelope fa-4x ml-5 mr-5" href="mailto:SARSA.web@gmail.com" alt="Email logo"></a>
        <a className="emBtn far fa-file-pdf fa-4x ml-5 mr-5" href="assets/Shawn A. Rather Resume.pdf" alt="Docs logo"></a>
      </div>
      <image src= { Avatar } class="bottom-logo col-12"></image>
      <h2>The past can talk to the future...if the present has ears to hear and eyes to see with.</h2>
      <p className="copyright">Designed & Built by me</p>
    </div>
    </footer>
  )
}

export default Footer