import React from 'react';

const SkillsForm = ({ data, onUpdate }) => {
  const addSkill = () => {
    const newSkill = {
      name: '',
      level: 'Beginner'
    };
    onUpdate([...data, newSkill]);
  };

  const updateSkill = (index, field, value) => {
    const updated = data.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    );
    onUpdate(updated);
  };

  const removeSkill = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h2>Skills</h2>
        <button type="button" className="add-btn" onClick={addSkill}>
          Add Skill
        </button>
      </div>
      
      {data.length === 0 && (
        <p className="empty-state">No skills added yet. Click "Add Skill" to get started.</p>
      )}
      
      {data.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="item-header">
            <h3>Skill {index + 1}</h3>
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeSkill(index)}
            >
              Remove
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Skill Name *</label>
              <input
                type="text"
                value={skill.name || ''}
                onChange={(e) => updateSkill(index, 'name', e.target.value)}
                placeholder="e.g., JavaScript, Python, Communication"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Proficiency Level *</label>
              <select
                value={skill.level || 'Beginner'}
                onChange={(e) => updateSkill(index, 'level', e.target.value)}
                required
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsForm;