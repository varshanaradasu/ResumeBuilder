# Resume Builder - MERN Stack

A professional resume builder application built with MongoDB, Express.js, React, and Node.js.

## Features

- User authentication (Sign up/Sign in)
- Create and edit resumes with multiple sections
- Real-time resume preview
- Save and manage multiple resumes
- PDF download functionality
- User dashboard and settings
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/resume-builder
   PORT=5000
   ```

### Running the Application

1. Start the backend server:
   ```bash
   npm run server
   ```

2. Start the frontend development server:
   ```bash
   npm run client
   ```

3. Run both concurrently:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Project Structure

```
resume-builder-mern/
├── client/          # React frontend
├── config/          # Database configuration
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/          # MongoDB models
├── routes/          # API routes
├── server.js        # Express server entry point
└── package.json     # Backend dependencies
```