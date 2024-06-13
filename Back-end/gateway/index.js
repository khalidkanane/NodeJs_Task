// gateway/index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');
const cors = require('cors');

const app = express();


app.use(cors()); // Use cors middleware
// app.use(express.json());


// Proxy configuration
app.use('/auth', createProxyMiddleware({
  target: config.authServiceUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/auth/': '', // remove /auth prefix when forwarding to the auth service
  },
}));

app.use('/tasks', createProxyMiddleware({
  target: config.taskServiceUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/tasks': '', // remove /tasks prefix when forwarding to the task service
  },
}));

app.use('/notifications', createProxyMiddleware({
  target: config.notificationServiceUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/notifications': '', // remove /notifications prefix when forwarding to the notification service
  },
}));

// Start the server
app.listen(config.port, () => {
  console.log(`API Gateway running at http://localhost:${config.port}`);
});
