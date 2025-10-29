import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onSave, onDownloadPDF }) => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 onClick={goToDashboard} style={{cursor: 'pointer'}}>Resume Builder</h1>
        </div>
        <div className="header-right">
          <span className="user-welcome">Hello, {userInfo.name}!</span>
          <div className="header-buttons">
            <button className="save-btn" onClick={onSave}>
              Save Resume
            </button>
            <button className="pdf-btn" onClick={onDownloadPDF}>
              Download PDF
            </button>
            <button className="logout-btn-header" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;