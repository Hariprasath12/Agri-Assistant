const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors=require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config=require('./config/database');
const app = express();
const users=require('./routes/users');

// Connect To Database
mongoose.connect(config.database);
console.log(config.database);
// On Connection
mongoose.connection.once('open', function() {
  console.log("connected");
});

const port = 3000;
app.use(cors());
// static folder
app.use(express.static('public'))

app.use(bodyParser.json());
app.use('/users',users);

app.get('/',(req,res)=>{
	res.send("hello");
})
app.listen(port, () => {
    console.log("Server started on port" + port);
});