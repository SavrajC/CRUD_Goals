const express = require('express');
const app = express();
const connectDB = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require ('./middleware/errorMiddleware');
connectDB();
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server Started on port: ${port}`);
})