const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const agri = require('../models/agri');
const multer = require('multer');
var proid="";
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');
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

    let pro, id;
    pro = req.user;
    id = pro.id;
    User.profile(id, (err, profile) => {
        res.send(profile);
    })
});
router.post('/profile', passport.authenticate('users', {
    session: false
}), (req, res, next) => {

    let pro, id;
    pro = req.user;
    id = pro.id;
    const prof = {
        name: req.body.name,
        address: req.body.address,
        soiltype: req.body.soiltype,
        irr: req.body.irr,
        farm: req.body.farm,
        acres: req.body.acres,


    }
    User.updateprofile(id, prof, (err, profile) => {
        res.send(profile);
    })
});

router.post('/location', passport.authenticate('users', {
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

router.get('/location', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;

    User.getlocation(id,(err, payment) => {
res.send(payment);
    });
});




router.get('/posts', passport.authenticate('users', {
    session: false
}), (req, res, next) => {

    agri.getAllPosts((err, post) => {

        res.send(post);
    });
});
router.get('/favposts', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.getfavpost(id, (err, post) => {

        res.send(post);
    });
});
router.post('/favpost', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    let ref = req.body.ref;
    User.favpost(id, ref, (err, post) => {

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

router.post('/addpayment', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    let rs = req.body.rs;
    const pay = {
        from: 'bank',
        to: id,
        amount: rs
    };
    // console.log(pay);
    User.incPayment(id, rs, (err, payment) => {
        User.updatePayment(id, pay, (err, payment) => {

            res.send(payment);
        });

    });
});

router.post('/updatepayment', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    let des = req.body.des;

    let from = req.body.from;
    let to = req.body.to;
    let rs = req.body.rs;

    if (des == "out") {
        rs = rs - (rs * 2);
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




router.get('/cropdiary', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.cropdDiary(id, (err, payment) => {
        res.send(payment);
    });
});




router.get('/paymenthistory', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.paymentHis(id, (err, payment) => {

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

router.get('/producthistory', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.productHistory(id, (err, crops) => {

        res.send(crops.product);
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
    // console.log(crops);
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
router.post('/productinit', passport.authenticate('users', {
    session: false
}),   (req, res, next)=> {
     let pro, id;
    pro = req.user;
    id = pro.id;
    const prd={
        name:req.body.name,
         quantity:req.body.qua,
          des:req.body.des
    };
    User.initproduct(prd,id,(err,numy)=>{
       User.productbyid(id,(err,num)=>{
        let products=num[0].product;
     let size=products.length;
     let id=products[size-1]._id;
     proid= id;
     res.send(num);
        // console.log(id);
       })
    })
      
     
});

router.post('/product', (req, res, next) =>{
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
        console.log(proid);
       // No error occured.
        path = req.file.path;
        User.updateimg(path,proid,(err,num)=>{
res.send(num);
        })
        
  });     
});

router.get('/productlist', passport.authenticate('users', {
    session: false
}), (req, res, next) => {
    let pro, id;
    pro = req.user;
    id = pro.id;
    User.productlist(id,(err, crops) => {

        res.send(crops);
    });
});




module.exports = router; 