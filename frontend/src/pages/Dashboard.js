import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Get user info from localStorage (simple approach)
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-nav">
          <h2>Resume Builder</h2>
          <div className="user-section">
            <span className="user-name">Welcome, {userInfo.name || 'User'}!</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <div className="user-profile">
            <div className="profile-avatar">
              {(userInfo.name || 'U').charAt(0).toUpperCase()}
            </div>
            <div className="profile-info">
              <h3>{userInfo.name || 'User'}</h3>
              <p>{userInfo.email || 'user@example.com'}</p>
            </div>
          </div>

          <div className="dashboard-actions">
            <h4>What would you like to do?</h4>
            <div className="action-buttons">
              <Link to="/builder" className="action-btn primary">
                <div className="action-icon">📝</div>
                <div className="action-text">
                  <h5>Build New Resume</h5>
                  <p>Create a professional resume from scratch</p>
                </div>
              </Link>

              <Link to="/my-resumes" className="action-btn secondary">
                <div className="action-icon">📄</div>
                <div className="action-text">
                  <h5>My Resumes</h5>
                  <p>View and edit your saved resumes</p>
                </div>
              </Link>

              <Link to="/settings" className="action-btn secondary">
                <div className="action-icon">⚙️</div>
                <div className="action-text">
                  <h5>Settings</h5>
                  <p>Update your profile and preferences</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;