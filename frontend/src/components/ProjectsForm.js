import React from 'react';

const ProjectsForm = ({ data, onUpdate }) => {
  const addProject = () => {
    const newProject = {
      title: '',
      description: '',
      technologies: [],
      link: ''
    };
    onUpdate([...data, newProject]);
  };

  const updateProject = (index, field, value) => {
    const updated = data.map((project, i) => 
      i === index ? { ...project, [field]: value } : project
    );
    onUpdate(updated);
  };

  const updateTechnologies = (index, techString) => {
    const technologies = techString.split(',').map(tech => tech.trim()).filter(tech => tech);
    updateProject(index, 'technologies', technologies);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h2>Projects</h2>
        <button type="button" className="add-btn" onClick={addProject}>
          Add Project
        </button>
      </div>
      
      {data.length === 0 && (
        <p className="empty-state">No projects added yet. Click "Add Project" to get started.</p>
      )}
      
      {data.map((project, index) => (
        <div key={index} className="project-item">
          <div className="item-header">
            <h3>Project {index + 1}</h3>
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeProject(index)}
            >
              Remove
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Project Title *</label>
              <input
                type="text"
                value={project.title || ''}
                onChange={(e) => updateProject(index, 'title', e.target.value)}
                placeholder="My Awesome Project"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Project Link</label>
              <input
                type="url"
                value={project.link || ''}
                onChange={(e) => updateProject(index, 'link', e.target.value)}
                placeholder="https://github.com/username/project"
              />
            </div>
            
            <div className="form-group full-width">
              <label>Technologies Used</label>
              <input
                type="text"
                value={project.technologies?.join(', ') || ''}
                onChange={(e) => updateTechnologies(index, e.target.value)}
                placeholder="React, Node.js, MongoDB (separate with commas)"
              />
            </div>
            
            <div className="form-group full-width">
              <label>Project Description *</label>
              <textarea
                value={project.description || ''}
                onChange={(e) => updateProject(index, 'description', e.target.value)}
                placeholder="Describe what the project does, your role, and key achievements..."
                rows="3"
                required
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsForm;