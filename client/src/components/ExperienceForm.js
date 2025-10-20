import React from 'react';

const ExperienceForm = ({ data, onUpdate }) => {
  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      isCurrentJob: false
    };
    onUpdate([...data, newExperience]);
  };

  const updateExperience = (index, field, value) => {
    const updated = data.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    onUpdate(updated);
  };

  const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h2>Work Experience</h2>
        <button type="button" className="add-btn" onClick={addExperience}>
          Add Experience
        </button>
      </div>
      
      {data.length === 0 && (
        <p className="empty-state">No work experience added yet. Click "Add Experience" to get started.</p>
      )}
      
      {data.map((experience, index) => (
        <div key={index} className="experience-item">
          <div className="item-header">
            <h3>Experience {index + 1}</h3>
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeExperience(index)}
            >
              Remove
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Company *</label>
              <input
                type="text"
                value={experience.company || ''}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                placeholder="Company name"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Position *</label>
              <input
                type="text"
                value={experience.position || ''}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                placeholder="Job title"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Start Date *</label>
              <input
                type="date"
                value={experience.startDate || ''}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={experience.endDate || ''}
                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                disabled={experience.isCurrentJob}
              />
            </div>
            
            <div className="form-group full-width">
              <label>
                <input
                  type="checkbox"
                  checked={experience.isCurrentJob || false}
                  onChange={(e) => updateExperience(index, 'isCurrentJob', e.target.checked)}
                />
                Currently working here
              </label>
            </div>
            
            <div className="form-group full-width">
              <label>Job Description</label>
              <textarea
                value={experience.description || ''}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities and achievements..."
                rows="3"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;