import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <header className="landing-header">
        <div className="logo">
          <span className="logo-icon">📝</span>
          <span className="logo-text">ResumeBuilder</span>
        </div>
        <nav className="nav-links">
          <Link to="/signin" className="nav-link">Sign In</Link>
          <Link to="/signup" className="nav-btn">Get Started</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="badge">🎓 Professional Resume Builder</div>
            <h1 className="hero-title">
              Create Your Perfect Resume in
              <span className="highlight"> Minutes</span>
            </h1>
            <p className="hero-description">
              Build a professional, ATS-friendly resume with our easy-to-use builder.
              Choose from templates, customize your content, and download instantly.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn-hero-primary">
                Start Building Free
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/signin" className="btn-hero-secondary">
                Sign In
              </Link>
            </div>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Resumes Created</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5 Min</span>
                <span className="stat-label">Average Build Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free to Use</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="resume-preview">
              <div className="preview-header">
                <div className="preview-avatar">JD</div>
                <div className="preview-info">
                  <div className="preview-name"></div>
                  <div className="preview-title"></div>
                </div>
              </div>
              <div className="preview-section">
                <div className="preview-line full"></div>
                <div className="preview-line medium"></div>
                <div className="preview-line large"></div>
              </div>
              <div className="preview-section">
                <div className="preview-line large"></div>
                <div className="preview-line medium"></div>
                <div className="preview-line full"></div>
              </div>
            </div>
            <div className="floating-badge badge-1">✨ ATS Friendly</div>
            <div className="floating-badge badge-2">💾 Easy Export</div>
            <div className="floating-badge badge-3">✅ Professional</div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Everything You Need</h2>
        <p className="section-subtitle">Powerful features to create the perfect resume</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon icon-purple">✏️</div>
            <h3>Easy Editor</h3>
            <p>Intuitive interface with real-time preview. Edit and see changes instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-blue">🎨</div>
            <h3>Professional Templates</h3>
            <p>Clean, modern designs that pass ATS systems and impress recruiters.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-green">💾</div>
            <h3>PDF Download</h3>
            <p>Export your resume as high-quality PDF with one click.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-orange">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your data is encrypted and stored securely. Only you have access.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-pink">☁️</div>
            <h3>Cloud Storage</h3>
            <p>Save multiple versions and access them from anywhere, anytime.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-cyan">⚡</div>
            <h3>Fast & Simple</h3>
            <p>No complex forms. Build your resume in minutes, not hours.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Build Your Resume?</h2>
          <p>Join thousands of job seekers who created their perfect resume with us.</p>
          <Link to="/signup" className="btn-cta">
            Get Started Now - It's Free
            <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Resume Builder. Built with MERN Stack.</p>
      </footer>
    </div>
  );
};

export default Landing;
