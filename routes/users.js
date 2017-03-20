const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const agri = require('../models/agri');
const fileUpload = require('express-fileupload');


// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        soiltype: req.body.soiltype,
        irr: req.body.irr,
        farm: req.body.farm,
        acres: req.body.acres,
        password: req.body.password,
        payment: 34
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
    const username = req.body.phone;
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
router.get('/profile', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    res.json({
        user: req.user
    });
});
router.get('/posts', passport.authenticate('users', {
    session: false
}), (req, res, next) => {

    agri.getAllPosts((err, post) => {

        res.send(post);
    });
});



router.get('/payment', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.payment(id, (err, payment) => {

        res.send(payment);
    });
});
router.post('/updatepayment', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
     let rs=req.body.rs;
     let des=req.body.des;
     if(rs>0){

     }else{

     }

    
    User.updatePayment(id,det,(err, payment) => {

        res.send(payment);
    });
});






router.get('/getCrops', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.getCrops(id, (err, crops) => {

        res.send(crops);
    });
});


router.post('/updatecrops', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;

    const crops = {
        crop: req.body.crops
    };
    console.log(crops);
    User.updateCrops(crops, id, (err, crop) => {

        res.send(crop);
    });

});
router.delete('/deletecrops/:id', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;

    const del = req.params.id;

    User.deleteCrops(del, id, (err, crop) => {

        res.send(crop);
    });

});








// router.post('/upload', function(req, res) {


//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
//   let sampleFile = req.files.sampleFile;

//   // Use the mv() method to place the file somewhere on your server 
//   sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
//     if (err)
//       return res.status(500).send(err);

//     res.send('File uploaded!');
//   });
//   });



module.exports = router;