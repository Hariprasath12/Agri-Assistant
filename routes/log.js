const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/log');
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});


router.post('/authenticate', (req, res, next) => {
  const username = req.body.email;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});
router.get('/profile', passport.authenticate('log', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
router.post('/inittrack', passport.authenticate('log', {session:false}), (req, res, next) => {
   let pro, id;
    pro = req.user;
    id = pro.id;

  var track={
    price:req.body.price,
    user:req.body.user,
    to:req.body.to,
    from:req.body.from,
    expecteddate:req.body.date,
}

User.inittrack(track,id,(err,post)=>{
   if(err) throw err;
res.send(post);
});
});

router.get('/trackbyid/:id', passport.authenticate('log', {session:false}), (req, res, next) => {
  
let id= req.params.id;
 console.log(id);
User.trackbyid(id,(err,post)=>{
   if(err) throw err;
res.send(post);
});
});
router.get('/location', passport.authenticate('log', {session:false}), (req, res, next) => {
  
  let pro, id;
    pro = req.user;
    id = pro.id;

User.location(id,(err,post)=>{
   if(err) throw err;
res.send(post);
});
});
router.post('/location', passport.authenticate('log', {session:false}), (req, res, next) => {
  
  let pro, id;
    pro = req.user;
    id = pro.id;
var loc={
  loc:req.body.loc,
  address:req.body.address,
  phone:req.body.phone,
  email:req.body.email
}
console.log(loc);
User.addlocation(loc,id,(err,post)=>{
   if(err) throw err;
res.send(post);
});
});
router.post('/updatetrack', passport.authenticate('log', {session:false}), (req, res, next) => {
  
  let pro, id;
    pro = req.user;
    id = pro.id;

var info={
  location:req.body.loc,
  id:req.body.id
}
console.log(info);
User.updatetrack(info,id,(err,post)=>{
   if(err) throw err;
res.send(post);
});
});
router.get('/payment', passport.authenticate('log', {session:false}), (req, res, next) => {
  
  let pro, id;
    pro = req.user;
    id = pro.id;
User.payment(id,(err,post)=>{
   if(err) throw err;
res.send(post);
});
});





module.exports = router;