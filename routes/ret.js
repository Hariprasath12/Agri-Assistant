const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/ret');
const far = require('../models/user');
const log =require('../models/log');

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
router.post('/profile', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
      let pro, id;
    pro = req.user;
    id = pro.id;
    const prof={
            name: req.body.name,
            phone: req.body.phone,
            companyname:req.body.companyname,
            companytype:req.body.companytype,
            address:req.body.address
}
    User.updateprofile(id,prof,(err,profile)=>{
        res.send(profile);
    })
});

router.get('/product', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {

    far.product((err, post) => {
        res.json(post);
    });


});


router.get('/trackbyid/:id', passport.authenticate('ret', {session:false}), (req, res, next) => {
  
let rid= req.params.id;
let pro, id;
    pro = req.user;
    id = pro.id;
 console.log(id);
log.trackbyref(rid,id,(err,post)=>{
   if(err) throw err;
res.send(post);
});
});


router.get('/paymenthistory', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.paymentHis(id, (err, payment) => {

        res.send(payment);
    });
});



router.get('/payment', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.payment(id, (err, payment) => {

        res.send(payment);
    });
});

router.post('/addpayment', passport.authenticate('ret', {
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
router.post('/location', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
let loc={
    lat:req.body.lat,
    lon:req.body.lon
};

console.log(loc);
User.updatelocation(id, loc, (err, p) => {

                    res.send(p);
                });

});

router.get('/location', passport.authenticate('ret', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;

    User.getlocation(id,(err, payment) => {
res.send(payment);
    });
});
router.post('/updatepayment', passport.authenticate('ret', {
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

    User.payment(id, (err, payment) => {

        if (payment.payment > rs) {
            User.incPayment(id, rs, (err, paym) => {

                User.updatePayment(id, pay, (err, pay) => {

                    res.send(pay);
                });
            });

        } else {
            res.json("amount is low");

        }
    });


});



module.exports = router;