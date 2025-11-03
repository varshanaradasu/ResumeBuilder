import React, { useState, useEffect } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import Header from '../components/Header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../App.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../config";


function ResumeBuilder() {
  const { id } = useParams(); // resume ID if editing
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  // ✅ define base backend URL once here
  const baseURL = `${API_BASE_URL}/api/resumes`;

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
  const [loading, setLoading] = useState(false);

  // ✅ Fetch existing resume if ID is present (Edit Mode)
  useEffect(() => {
    if (id) {
      const fetchResumeData = async () => {
        setLoading(true);
        try {
          // ⬇️ use full backend URL
          const response = await fetch(`${baseURL}/${id}`);
          if (response.ok) {
            const data = await response.json();
            setResumeData(data);
          } else {
            console.error('Failed to fetch resume');
          }
        } catch (error) {
          console.error('Error fetching resume:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchResumeData();
    }
  }, [id]);

  // ✅ Update resumeData when form changes
  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  // ✅ Save or Update Resume
  const saveResume = async () => {
    try {
      const method = id ? 'PUT' : 'POST';
      const url = id ? `${baseURL}/${id}` : baseURL;

      // prepare request body
      const payload = {
        ...resumeData,
        userEmail: userInfo.email || resumeData.personalInfo.email, // ✅ ensure correct user linkage
      };

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(id ? '✅ Resume updated successfully!' : '✅ Resume saved successfully!');
      } else {
        alert(`❌ Error: ${data.message || 'Unable to save resume'}`);
      }
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('❌ Error saving resume. Please try again.');
    }
  };


  // ✅ Download as PDF
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

  if (loading) return <div className="loading">Loading resume...</div>;

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
