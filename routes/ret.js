const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/ret');
const far = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        companyname: req.body.companyname,
        address: req.body.address,
        phone: req.body.phone,
        companytype: req.body.companytype

    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user'
            });
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.email;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.profile(id, (err, profile) => {
        res.send(profile);
    });
});

router.get('/product', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {

    far.product((err, post) => {
        res.json(post);
    });


});
router.get('/payment', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;


    User.payment(id, (err, post) => {
        res.json(post);
    });


});

router.post('/sendpayment', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
  let des=req.body.des;
    let from = req.body.from;
    let to = req.body.to;
    let rs = req.body.rs;
 
if(des=="out"){
    rs=rs - (rs * 2);
}

    const pay = {
        from: from,
        to: to,
        amount: rs
    };
console.log(pay);

    User.payment(id, (err, payment) => {

        if (payment.payment > rs) {
            User.incPayment(id, rs, (err, pay) => {

                User.updatePayment(id, pay, (err, pay) => {
});
            });

        } else {
            res.json("amount is low");

        }
    });


});



module.exports = router;