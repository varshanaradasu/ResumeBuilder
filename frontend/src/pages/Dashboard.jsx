import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const resumeTips = [
    {
      icon: '✍️',
      title: 'Keep It Concise',
      description: 'Limit your resume to 1-2 pages. Recruiters spend only 6 seconds on first review.',
      color: '#667eea'
    },
    {
      icon: '🎯',
      title: 'Tailor to Job',
      description: 'Customize your resume for each position. Use keywords from the job description.',
      color: '#f093fb'
    },
    {
      icon: '📈',
      title: 'Quantify Achievements',
      description: 'Use numbers and metrics. "Increased sales by 40%" is better than "Improved sales".',
      color: '#4facfe'
    }
  ];

  return (
    <div className="dashboard">
      <div className="bg-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="dashboard-header">
        <div className="dashboard-nav">
          <div className="logo-section">
            <span className="logo-icon">📄</span>
            <h2>Resume Builder</h2>
          </div>
          <div className="user-section">
            <span className="user-name">  Welcome, {userInfo.name || 'User'}! 👋</span>
            <button className="logout-btn" onClick={handleLogout}>
              <span>Logout</span>
              <span className="logout-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <div className="avatar-ring"></div>
              <span className="avatar-text">{(userInfo.name || 'U').charAt(0).toUpperCase()}</span>
            </div>
            <div className="profile-info">
              <h3>{userInfo.name || 'User'}</h3>
              <p className="profile-email">{userInfo.email || 'user@example.com'}</p>
              <p className="profile-tagline">🚀 Ready to build your professional resume</p>
            </div>
          </div>
        </div>

        <div className="tips-grid">
          {resumeTips.map((tip, index) => (
            <div key={index} className="tip-card-small" style={{ '--delay': `${index * 0.1}s`, '--color': tip.color }}>
              <div className="tip-icon-small">{tip.icon}</div>
              <div className="tip-content-small">
                <h4>{tip.title}</h4>
                <p>{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="actions-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
            <p>What would you like to do today?</p>
          </div>

          <div className="action-grid">
            <Link to="/builder" className="action-card primary-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon-wrapper">
                  <span className="card-icon">✨</span>
                </div>
                <h3>Build New Resume</h3>
                <p>Create a stunning professional resume in minutes</p>
                <div className="card-arrow">→</div>
              </div>
            </Link>

            <Link to="/my-resumes" className="action-card secondary-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon-wrapper">
                  <span className="card-icon">📁</span>
                </div>
                <h3>My Resumes</h3>
                <p>Access and manage all your saved resumes</p>
                <div className="card-arrow">→</div>
              </div>
            </Link>

            <Link to="/settings" className="action-card tertiary-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon-wrapper">
                  <span className="card-icon">⚙️</span>
                </div>
                <h3>Settings</h3>
                <p>Customize your profile and preferences</p>
                <div className="card-arrow">→</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Project Info Section */}
        <div className="info-section">
          <div className="info-card">
            <div className="info-header">
              <div className="info-icon">🎓</div>
              <h3>About This Resume Builder</h3>
            </div>
            <div className="info-content">
              <div className="info-item">
                <span className="info-label">✨ Features:</span>
                <span className="info-value">Professional templates, Real-time preview, PDF export</span>
              </div>
              <div className="info-item">
                <span className="info-label">🛠️ Built with:</span>
                <span className="info-value">React, Node.js, Express, MongoDB (MERN Stack)</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎯 Purpose:</span>
                <span className="info-value">Help you create stunning resumes that stand out to employers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
