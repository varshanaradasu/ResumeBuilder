const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: "./backend/.env" });

const app = express();
app.use(cors());
app.use(express.json());
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/resume-builder");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

connectDB();

const resumeRoutes = require("../backend/routes/resume");
app.use("/api/resumes", resumeRoutes);

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend working on Vercel!" });
});

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
});

// 🚫 No app.listen()
// ✅ Instead export the app for Vercel to handle
module.exports = app;
