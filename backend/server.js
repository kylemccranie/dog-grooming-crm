const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');

//setting up config file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//Using Cors and Express
app.use(cors());
app.use(express.json());

//Mongo DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri , { useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology:true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connection with Mongo established");
})

//User Route API
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

//Listening on Server
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
