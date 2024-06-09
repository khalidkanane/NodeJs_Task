// task-service/routes/task.js
const express = require('express');
const Task = require('../models/task');

const router = express.Router();

// Create a new task
router.post('/tasks', async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;

    if (!title || !description || !assignedTo) {
      return res.status(400).json({ message: 'Title, description, and assignedTo are required' });
    }

    const task = new Task({ title, description, assignedTo });
    await task.save();

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// Update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, assignedTo } = req.body;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.assignedTo = assignedTo || task.assignedTo;

    await task.save();

    res.json({ message: 'Task updated successfully', task });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.deleteOne();

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/tasks/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const task = await Task.findById(id);
  
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.json({ task });
    } catch (error) {
      console.error('Error fetching task:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Get all tasks
  router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
  
      res.json({ tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;
