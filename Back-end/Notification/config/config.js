// notification-service/config/config.js
require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT
};
