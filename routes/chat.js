const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const config = require('../config/database');

var http = require('http').Server(router);
var io = require('socket.io')(http);
router.use(cors());
router.get('/', function(req, res){
res.send('Welcome chat !!!');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log(msg);
  });
});

module.exports = router;