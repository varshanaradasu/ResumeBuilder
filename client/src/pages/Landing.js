import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-content">
          <h1>Build Your Perfect Resume</h1>
          <p>Create a professional resume in minutes with our easy-to-use builder</p>
          <div className="landing-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/signin" className="btn btn-secondary">Sign In</Link>
          </div>
        </div>
        <div className="landing-image">
          <div className="resume-mockup">
            <div className="mockup-header"></div>
            <div className="mockup-content">
              <div className="mockup-line long"></div>
              <div className="mockup-line"></div>
              <div className="mockup-line medium"></div>
              <div className="mockup-line"></div>
              <div className="mockup-line long"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;