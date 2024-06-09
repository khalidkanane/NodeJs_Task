// auth-service/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const config = require('./config/config');

const app = express();
app.use(bodyParser.json());

mongoose.connect(config.mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/auth', authRoutes);

app.listen(config.port, () => {
  console.log(`Auth service listening at http://localhost:${config.port}`);
});
