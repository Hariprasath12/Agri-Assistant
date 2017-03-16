const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/agri');
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    address:req.body.address,
    clg:req.body.clg,
    qualification:req.body.qua,
    phone:req.body.phone,
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
  const username = req.body.phone;
  const password = req.body.password;

  User.getUserByUsername(username,(err, user) => {
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
router.get('/profile', passport.authenticate('agri', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
router.get('/post',passport.authenticate('agri', {session:false}), (req, res, next) => {
let pro,id;
pro=req.user;
id=pro.id;
User.getPost(id,(err,post)=>{
res.json(post);
});

});

router.post('/post',passport.authenticate('agri', {session:false}), (req, res, next) => {
let pro,id;
pro=req.user;
id=pro.id;
const post={
  content:req.body.content,
  tag:req.body.tag,
  title:req.body.title,
  id:id

};
console.log(post);

User.addPost(post,(err,post)=>{
   if(err) throw err;
if(post.ok==1){
  res.json({success: true, msg:'updated'});
}

});

});

module.exports = router;