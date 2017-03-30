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
    password: req.body.password,
    companyname:req.body.cname,
    cmail:req.body.cmail,

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
 
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.profile(id, (err, profile) => {
        res.send(profile);
    })

router.post('/profile', passport.authenticate('log', {
    session: false
}), (req, res, next) => {

     let pro, id;
    pro = req.user;
    id = pro.id;
    const prof={
            name: req.body.name,
            phone: req.body.phone,
            cmail:req.body.cmail,
            companyname:req.body.companyname

      
       

    }
    User.updateprofile(id,prof,(err,profile)=>{
        res.send(profile);
    })
});



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
  location:req.body.loc,
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


 const location={
  location:req.body.loc};
  
  let uid=req.body.id;


User.updatetrack(uid,location,id,(err,post)=>{
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


router.get('/paymenthistory', passport.authenticate('log', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.paymentHis(id, (err, payment) => {

        res.send(payment);
    });
});

router.post('/addpayment', passport.authenticate('log', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
let rs=req.body.rs;
const pay = {
        from:'bank',
        to: id,
        amount:rs
    };
    // console.log(pay);
    User.incPayment(id,rs, (err, payment) => {
            User.updatePayment(id, pay, (err, payment) => {

                    res.send(payment);
                });
        
    });
});



module.exports = router;