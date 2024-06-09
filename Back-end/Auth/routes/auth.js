// auth-service/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const config = require('../config/config');

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



router.post('/logout', async (req, res) => {
  const token = req.headers['authorization'];
  if (token) {
    blacklist.push(token); // Add token to blacklist
    return res.status(200).json({ message: 'Logged out successfully' });
  } else {
    return res.status(400).json({ message: 'Token is required for logout' });
  }
});




module.exports = router;
