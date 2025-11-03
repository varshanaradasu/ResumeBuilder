const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://varsha:varsha@cluster0.n7rvzuu.mongodb.net/resumeBuilder');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
connectDB();

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


const resumeRoutes = require('./routes/resume');
app.use('/api/resumes', resumeRoutes);


app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});