import React from 'react';

const PersonalInfoForm = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({ ...data, [field]: value });
  };

  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            value={data.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            value={data.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={data.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="tel"
            value={data.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="(123) 456-7890"
            required
          />
        </div>
        
        <div className="form-group full-width">
          <label>Address</label>
          <input
            type="text"
            value={data.address || ''}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Your address"
          />
        </div>
        
        <div className="form-group full-width">
          <label>Professional Summary</label>
          <textarea
            value={data.summary || ''}
            onChange={(e) => handleChange('summary', e.target.value)}
            placeholder="Brief professional summary..."
            rows="4"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;