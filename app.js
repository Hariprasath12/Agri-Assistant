const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const fileUpload = require('express-fileupload');


// Connect To Database
mongoose.connect(process.env.MONGOLAB_URI || config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');
const agri = require('./routes/agri');
const log = require('./routes/log');
const ret = require('./routes/ret');
const chat = require('./routes/chat');
// Port Number
var port =process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
// app.use(fileUpload());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
 app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "localhost:4200/user/dashboard/chat");
      next();
    });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./config/passport')(passport);
app.use('/chat', chat);
app.use('/users', users);
app.use('/agri', agri);
app.use('/log', log);
app.use('/ret', ret);


// Index Route
app.get('/', (req, res) => {
  res.send('Welcome !!!');
});
app.get('/about', (req, res) => {
  res.send('about');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});