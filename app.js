const express = require('express');
const dotenv = require('dotenv');
const studentRouter =  require('./route/student');
const connectDB = require('./config/db');

// set up the express app
const app = express();
dotenv.config()


// Set environment port
const PORT = process.env.PORT || 5000

// parse incoming requests data (https://github.com/expressjs)
app.use(express.json());

app.use(studentRouter)

//call mongoDB connection
connectDB()




 app.listen(PORT, console.log(`Listening On Port ${PORT}`))