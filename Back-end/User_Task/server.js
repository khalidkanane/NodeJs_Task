const express = require("express");

const dot=require("dotenv");

const mongoose = require("mongoose")
const app =express()



dot.config()


mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Database is connected on port " + process.env.PORT);
})
.catch((err) => {
    console.error("Could not connect to the database", err);
    process.exit(1); // Exit the process if the connection fails
});



const UserRoute = require('./routes/User')

app.use('/user',UserRoute)


app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT);
})
.on('error', (err) => {
    console.error("Server failed to start", err);
});