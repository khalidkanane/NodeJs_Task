require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretKey: process.env.SECRET_KEY,
  port: process.env.PORT
};