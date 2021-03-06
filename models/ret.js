const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,

        unique: true
    },
    password: {
        type: String,
        required: true

    },
    loc:[
    {lat:Number,
        lon:Number}],
    companyname: String,
    companytype: String,
    img: String,
    product: [{
        id: String,
        from: String,
        price: String,
        track: {
            type: String,
            default: null
        },
        date: {
            type: Boolean,
            default: false
        }

    }],
    payment: {
        type: Number,
        default: 2
    },
    pay_his: [{
        id: String,
        amount: Number,
        to: String,
        from: String,
        date: {
            type: Date,
            default: Date.now
        }

    }],
    review: [{
        id: String,
        stars: Number,
        cmt: String
    }]
});

const User = module.exports = mongoose.model('ret', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {
        email: username
    }
    User.findOne(query, callback);
}


module.exports.profile = function(id, callback) {
    // db.users.find({awards: {$elemMatch: {award:'National Medal', year:1975}}})

    User.find({
        _id: id
    }, 'name email companyname address phone companytype', callback);

}


module.exports.updateprofile = function(id,profile, callback) {
const con={_id:id};
const update={'name':profile.name,'phone':profile.phone,'companyname':profile.companyname,'address':profile.address,'companytype':profile.companytype};
const options={ multi: false}

    User.update(con,update,options,callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.payment = function(id, callback) {

    User.findById(id, 'payment', callback);
}

module.exports.paymentHis = function(id, callback) {

    User.find({
        _id: id
    }, 'pay_his', callback);
}

module.exports.product = function(callback) {

    User.find({

    }, 'product', callback);
}
module.exports.getlocation = function(id,callback) {

    User.find({
 _id: id
    },'loc',callback);
}
module.exports.updatelocation = function(id,loc,callback) {
    // console.log(loc);
 const con = {
        _id: id
    };
    const sub = {
        $push: {
            "loc": loc

        }
    };
    const options = {
        multi: false
    };
    User.update(con, sub, options, callback);
   
}





module.exports.incPayment = function(id, rs, callback) {

    const con = {
        _id: id
    };
    const update = {
        $inc: {
            payment: rs
        }
    };
    const options = {
        multi: false
    };
    User.update(con, update, options, callback);
}

module.exports.updatePayment = function(id, det, callback) {
       console.log(det);

       const con = {
        _id: id
    };
   
    const options = {
        multi: false
    };

    const sub = {
        $push: {
            "pay_his": det

        }
    };
 
    User.update(con, sub, options, callback);

}



module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}