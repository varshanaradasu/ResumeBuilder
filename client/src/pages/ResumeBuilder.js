import React, { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import Header from '../components/Header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../App.css';

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  const [activeSection, setActiveSection] = useState('personal');

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const saveResume = async () => {
    try {
      const response = await fetch('/api/resumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData),
      });
      
      if (response.ok) {
        alert('Resume saved successfully!');
      } else {
        alert('Error saving resume. Please try again.');
      }
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('Error saving resume. Please try again.');
    }
  };

  const downloadPDF = async () => {
    const resumeElement = document.querySelector('.resume-preview');
    if (!resumeElement) {
      alert('Resume preview not found');
      return;
    }

    try {
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${resumeData.personalInfo.firstName || 'Resume'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="App">
      <Header onSave={saveResume} onDownloadPDF={downloadPDF} />
      <div className="main-container">
        <div className="form-section">
          <ResumeForm
            resumeData={resumeData}
            updateResumeData={updateResumeData}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <div className="preview-section">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;