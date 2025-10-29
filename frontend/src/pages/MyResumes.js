import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MyResumes.css';

const MyResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  useEffect(() => {
    // Fetch resumes from API
    const fetchResumes = async () => {
      try {
        const response = await fetch('/api/resumes');
        if (response.ok) {
          const data = await response.json();
          setResumes(data);
        }
      } catch (error) {
        console.error('Error fetching resumes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const deleteResume = async (id) => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        const response = await fetch(`/api/resumes/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          setResumes(resumes.filter(resume => resume._id !== id));
        }
      } catch (error) {
        console.error('Error deleting resume:', error);
      }
    }
  };

  return (
    <div className="my-resumes">
      <div className="resumes-header">
        <div className="resumes-nav">
          <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
          <div className="user-section">
            <span className="user-name">Welcome, {userInfo.name || 'User'}!</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="resumes-content">
        <div className="resumes-container">
          <h2>My Resumes</h2>
          
          {loading ? (
            <div className="loading">Loading your resumes...</div>
          ) : resumes.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📄</div>
              <h3>No resumes yet</h3>
              <p>Create your first professional resume to get started!</p>
              <Link to="/builder" className="create-btn">
                Create New Resume
              </Link>
            </div>
          ) : (
            <div className="resumes-grid">
              {resumes.map((resume) => (
                <div key={resume._id} className="resume-card">
                  <div className="resume-preview">
                    <div className="resume-name">
                      {resume.personalInfo?.firstName} {resume.personalInfo?.lastName}
                    </div>
                    <div className="resume-email">
                      {resume.personalInfo?.email}
                    </div>
                  </div>
                  <div className="resume-actions">
                    <span className="resume-date">
                      {new Date(resume.updatedAt).toLocaleDateString()}
                    </span>
                    <div className="action-buttons">
                      <Link to="/builder" className="edit-btn">
                        Edit
                      </Link>
                      <button 
                        className="delete-btn"
                        onClick={() => deleteResume(resume._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyResumes;