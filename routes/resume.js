const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// GET /api/resumes - Get all resumes
router.get('/', resumeController.getAllResumes);

// GET /api/resumes/:id - Get single resume
router.get('/:id', resumeController.getResumeById);

// POST /api/resumes - Create new resume
router.post('/', resumeController.createResume);

// PUT /api/resumes/:id - Update resume
router.put('/:id', resumeController.updateResume);

// DELETE /api/resumes/:id - Delete resume
router.delete('/:id', resumeController.deleteResume);

module.exports = router;