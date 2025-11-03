import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MyResumes.css';

const MyResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  // ✅ Step 3: use same baseURL as in ResumeBuilder
  const baseURL = "http://localhost:5000/api/resumes";

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        // ⬇️ use full backend URL for fetching resumes
        const response = await fetch(`${baseURL}?email=${userInfo.email}`);
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

    if (userInfo?.email) {
      fetchResumes();
    }
  }, [userInfo.email]);

  const deleteResume = async (id) => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        // ⬇️ use full backend URL for delete
        const response = await fetch(`${baseURL}/${id}`, {
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
                      {/* ✅ Edit navigates to ResumeBuilder with ID */}
                      <Link to={`/builder/${resume._id}`} className="edit-btn">
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
