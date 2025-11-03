const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// ✅ Get all resumes for a specific user
router.get('/', async (req, res) => {
    try {
        const userEmail = req.query.email;

        if (!userEmail) {
            return res.status(400).json({ message: 'Email query parameter is required' });
        }

        const resumes = await Resume.find({ userEmail });
        res.json(resumes);
    } catch (error) {
        console.error('Error fetching resumes:', error.message);
        res.status(500).json({ message: 'Error fetching resumes', error: error.message });
    }
});

// ✅ Create new resume
router.post('/', async (req, res) => {
    try {
        const { personalInfo, userEmail } = req.body;

        if (!userEmail && !personalInfo?.email) {
            return res.status(400).json({ message: 'User email is required to save resume' });
        }

        // ✅ Use whichever email is available
        const finalEmail = userEmail || personalInfo.email;

        const newResume = new Resume({
            ...req.body,
            userEmail: finalEmail
        });


        await newResume.save();

        res.status(201).json({
            message: 'Resume saved successfully',
            resume: newResume
        });
    } catch (error) {
        console.error('Error saving resume:', error.message);
        res.status(500).json({ message: 'Error saving resume', error: error.message });
    }
});


// Get resume by ID
router.get('/:id', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resume', error });
    }
});

router.get('/user/:email', async (req, res) => {
    try {
        const resumes = await Resume.find({ userEmail: req.params.email });
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resumes', error });
    }
});
// Update resume
router.put('/:id', async (req, res) => {
    try {
        const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Error updating resume', error });
    }
});

// ✅ Delete resume
router.delete('/:id', async (req, res) => {
    try {
        await Resume.findByIdAndDelete(req.params.id);
        res.json({ message: 'Resume deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
