import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="overlay"></div>
      <div className="landing-container">
        <div className="landing-content">
          <h1>Build, Save & Download Your Resume Easily</h1>
          <p>
            Create a professional resume in just a few minutes. Start from scratch,
            fill your details, edit anytime, and download your resume instantly.
          </p>

          <div className="landing-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/signin" className="btn btn-secondary">Sign In</Link>
          </div>

          <div className="features">
            <div className="feature">
              <i className="fas fa-edit"></i>
              <h4>Create & Edit</h4>
              <p>Easily create new resumes or edit your saved ones anytime.</p>
            </div>
            <div className="feature">
              <i className="fas fa-save"></i>
              <h4>Save Progress</h4>
              <p>Your resumes are securely saved, so you can come back later to make changes.</p>
            </div>
            <div className="feature">
              <i className="fas fa-file-download"></i>
              <h4>Download Instantly</h4>
              <p>Download your completed resume in a clean, ready-to-use format.</p>
            </div>
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
