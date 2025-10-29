import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ resumeData }) => {
  const { personalInfo, experience, education, skills, projects } = resumeData;

  return (
    <div className="resume-preview">
      <div className="resume-header">
        <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
        <div className="contact-info">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
        {personalInfo.summary && (
          <div className="summary">
            <p>{personalInfo.summary}</p>
          </div>
        )}
      </div>

      {experience.length > 0 && (
        <div className="resume-section">
          <h2>Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="item-header">
                <h3>{exp.position}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="date-range">
                {exp.startDate} - {exp.isCurrentJob ? 'Present' : exp.endDate || 'Present'}
              </div>
              {exp.description && <p className="description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="resume-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="item-header">
                <h3>{edu.degree} in {edu.field}</h3>
                <span className="institution">{edu.institution}</span>
              </div>
              <div className="graduation-info">
                <span>Graduated: {edu.graduationYear}</span>
                {edu.gpa && <span>GPA: {edu.gpa}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div className="resume-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div className="resume-section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="item-header">
                <h3>{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                )}
              </div>
              {project.technologies.length > 0 && (
                <div className="technologies">
                  <strong>Technologies: </strong>
                  {project.technologies.join(', ')}
                </div>
              )}
              {project.description && <p className="description">{project.description}</p>}
            </div>
          ))}
        </div>
      )}

      {!personalInfo.firstName && !personalInfo.lastName && (
        <div className="empty-preview">
          <p>Fill out the form to see your resume preview here.</p>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;