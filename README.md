# Resume Builder - MERN Stack

A professional resume builder application built with MongoDB, Express.js, React, and Node.js.

## Features

- 🎨 **Real-time Preview** - See your resume update live as you fill in information
- 💾 **Save & Export** - Save resumes to database and download as PDF
- 🔐 **User Authentication** - Sign up/Sign in functionality (ready for implementation)
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🎯 **Multiple Sections** - Personal info, experience, education, skills, and projects

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
   cd frontend
   npm install
   cd ..
   ```
   
   Or install all at once:
   ```bash
   npm run install-all
   ```

4. Create a `.env` file in the `backend` directory with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/resume-builder
   PORT=5000
   NODE_ENV=development
   ```

### Running the Application

**Development Mode (recommended)** - Run both servers concurrently:
```bash
npm run dev
```

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

**Production:**
```bash
npm run build
npm start
```

## Usage

1. Open http://localhost:3000 in your browser
2. Navigate to the template selector (/templates)
3. Choose your preferred template
4. Fill in your information in the form
5. Watch your resume update in real-time
6. Download as PDF or save to database


## Technologies Used

**Frontend:**
- React 19
- React Router DOM 7
- HTML2Canvas & jsPDF (PDF generation)

**Backend:**
- Node.js & Express.js 5
- MongoDB with Mongoose
- CORS, dotenv

**Development:**
- Concurrently, Nodemon