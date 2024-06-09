// task-service/models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'pending' },
  assignedTo: { type: String, required: true }
});

module.exports = mongoose.model('Task', taskSchema);
