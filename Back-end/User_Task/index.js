// task-service/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/task');
const config = require('./config/config');

const app = express();
app.use(bodyParser.json());

mongoose.connect(config.mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use('/api', taskRoutes);

app.listen(config.port, () => {
  console.log(`Task service listening at http://localhost:${config.port}`);
});
 