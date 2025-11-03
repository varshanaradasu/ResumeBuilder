const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        console.log('Signup request received:', req.body);
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            console.log('Missing field');
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: 'User already exists' });
        }

        // Password will be hashed automatically by the pre-save hook in the User model
        const user = new User({ name, email, password });
        await user.save();

        console.log('User saved:', user.email);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error during signup' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        console.log('Signin request received:', req.body);
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found:', email);
            return res.status(400).json({ message: 'Invalid credentials (no user)' });
        }

        console.log('Comparing passwords...');
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Compare result:', isMatch);

        if (!isMatch) {
            console.log('Password mismatch for:', email);
            return res.status(400).json({ message: 'Invalid credentials (wrong password)' });
        }

        console.log('Login successful for:', email);
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ message: 'Server error during signin' });
    }
});

module.exports = router;