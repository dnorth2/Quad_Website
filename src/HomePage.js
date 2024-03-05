import React from 'react';
import './HomePage.css'; // Make sure to import the CSS file
import Alternate_Logo_Pink from './Alternate_Logo_Pink.png';
import { Link } from 'react-router-dom';
import sprintOneDemo from './sprint1_demo.mp4';
function HomePage() {
  return (
    <div className="container">
      {/* <h1 className="header">The QUAD</h1> */}
      <nav className="navigation">
        <Link to="/About_Us" className="nav-link">About Us</Link>
        <Link to="/Project_Deliverables" className="nav-link">Project Deliverables</Link>
      </nav>
      <img src={Alternate_Logo_Pink} className="Alternate-logo" alt="logo"/>
      <p className="description">
      Our Goals: Our project aims to create a secure and user-friendly marketplace specifically designed for college-aged females. This platform will enable them to buy, sell, and rent clothing with confidence, eliminating concerns over fraudulent activities. Our mission is to ensure a trustworthy and efficient transaction process for our users.
        The primary objective of our application is to streamline and automate the listing process, thereby optimizing operational efficiency. This strategic enhancement will enable QUAD to reallocate valuable resources towards critical growth areas
      </p>
      {/* Placeholder for future video */}
      <div className="videoContainer">
        <video className="video" controls>
          <source src={sprintOneDemo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HomePage;
