// gateway/config/index.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  authServiceUrl: process.env.AUTH_SERVICE_URL,
  taskServiceUrl: process.env.TASK_SERVICE_URL,
  notificationServiceUrl: process.env.NOTIFICATION_SERVICE_URL
};
