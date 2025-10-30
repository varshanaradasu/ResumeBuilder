import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import './ResumeForm.css';

const ResumeForm = ({ resumeData, updateResumeData, activeSection, setActiveSection }) => {
  const sections = [
    { key: 'personal', label: 'Personal Info', component: PersonalInfoForm },
    { key: 'experience', label: 'Experience', component: ExperienceForm },
    { key: 'education', label: 'Education', component: EducationForm },
    { key: 'skills', label: 'Skills', component: SkillsForm },
    { key: 'projects', label: 'Projects', component: ProjectsForm }
  ];

  const renderActiveSection = () => {
    const section = sections.find(s => s.key === activeSection);
    if (!section) return null;

    const Component = section.component;
    return (
      <Component
        data={resumeData[activeSection] || (activeSection === 'personal' ? resumeData.personalInfo : [])}
        onUpdate={(data) => updateResumeData(activeSection === 'personal' ? 'personalInfo' : activeSection, data)}
      />
    );
  };

  return (
    <div className="resume-form">
      <div className="section-tabs">
        {sections.map(section => (
          <button
            key={section.key}
            className={`section-tab ${activeSection === section.key ? 'active' : ''}`}
            onClick={() => setActiveSection(section.key)}
          >
            {section.label}
          </button>
        ))}
      </div>
      <div className="section-content">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default ResumeForm;