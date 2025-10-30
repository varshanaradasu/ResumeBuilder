import React from 'react';

const EducationForm = ({ data, onUpdate }) => {
  const addEducation = () => {
    const newEducation = {
      institution: '',
      degree: '',
      field: '',
      graduationYear: '',
      gpa: ''
    };
    onUpdate([...data, newEducation]);
  };

  const updateEducation = (index, field, value) => {
    const updated = data.map((edu, i) => 
      i === index ? { ...edu, [field]: value } : edu
    );
    onUpdate(updated);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h2>Education</h2>
        <button type="button" className="add-btn" onClick={addEducation}>
          Add Education
        </button>
      </div>
      
      {data.length === 0 && (
        <p className="empty-state">No education added yet. Click "Add Education" to get started.</p>
      )}
      
      {data.map((education, index) => (
        <div key={index} className="education-item">
          <div className="item-header">
            <h3>Education {index + 1}</h3>
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Institution *</label>
              <input
                type="text"
                value={education.institution || ''}
                onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                placeholder="University/College name"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Degree *</label>
              <input
                type="text"
                value={education.degree || ''}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                placeholder="Bachelor's, Master's, etc."
                required
              />
            </div>
            
            <div className="form-group">
              <label>Field of Study *</label>
              <input
                type="text"
                value={education.field || ''}
                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                placeholder="Computer Science, Business, etc."
                required
              />
            </div>
            
            <div className="form-group">
              <label>Graduation Year *</label>
              <input
                type="text"
                value={education.graduationYear || ''}
                onChange={(e) => updateEducation(index, 'graduationYear', e.target.value)}
                placeholder="2023"
                required
              />
            </div>
            
            <div className="form-group">
              <label>GPA (Optional)</label>
              <input
                type="text"
                value={education.gpa || ''}
                onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                placeholder="3.5/4.0"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationForm;