// notification-service/routes/notification.js
const express = require('express');
const Notification = require('../models/notification');

const router = express.Router();

// Create a new notification
router.post('/notifications', async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.status(400).json({ message: 'userId and message are required' });
    }

    const notification = new Notification({ userId, message });
    await notification.save();

    res.status(201).json({ message: 'Notification created successfully', notification });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Mark a notification as read
router.put('/notifications/:id/read', async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    notification.read = true;
    await notification.save();

    res.json({ message: 'Notification marked as read', notification });
  } catch (error) {
    console.error('Error marking notification as read:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all notifications for a user
router.get('/notifications/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const notifications = await Notification.find({ userId });

    res.json({ notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
