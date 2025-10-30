import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  
  const [formData, setFormData] = useState({
    name: userInfo.name || '',
    email: userInfo.email || ''
  });

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user info in localStorage
    const updatedUserInfo = {
      ...userInfo,
      name: formData.name,
      email: formData.email
    };
    localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
    alert('Settings updated successfully!');
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <div className="settings-nav">
          <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
          <div className="user-section">
            <span className="user-name">Welcome, {userInfo.name || 'User'}!</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="settings-content">
        <div className="settings-container">
          <h2>Settings</h2>
          
          <div className="settings-card">
            <div className="settings-section">
              <h3>Profile Information</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </form>
            </div>

            <div className="settings-section">
              <h3>Account Actions</h3>
              <div className="action-items">
                <div className="action-item">
                  <div className="action-info">
                    <h4>Export Data</h4>
                    <p>Download all your resume data</p>
                  </div>
                  <button className="action-btn secondary">
                    Export
                  </button>
                </div>
                
                <div className="action-item">
                  <div className="action-info">
                    <h4>Clear All Data</h4>
                    <p>Remove all saved resumes</p>
                  </div>
                  <button 
                    className="action-btn danger"
                    onClick={() => {
                      if (window.confirm('Are you sure? This will delete all your resumes.')) {
                        alert('Feature coming soon!');
                      }
                    }}
                  >
                    Clear Data
                  </button>
                </div>

                <div className="action-item">
                  <div className="action-info">
                    <h4>Delete Account</h4>
                    <p>Permanently delete your account</p>
                  </div>
                  <button 
                    className="action-btn danger"
                    onClick={() => {
                      if (window.confirm('Are you sure? This action cannot be undone.')) {
                        localStorage.removeItem('userInfo');
                        navigate('/');
                      }
                    }}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;