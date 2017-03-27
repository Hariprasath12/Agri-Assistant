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
    companyname: String,
    companytype: String,
    img: String,
    product: [{
        id: String,
        from: String,
        price: String,
        track:{
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
    payment_his: [{
        to: String,
        from: String,
        date: {
            type: Boolean,
            default: false
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
       
    },'product', callback);
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
    const con = {
        _id: id
    };
    const update = {
        $inc: {
            payment: det.rs
        }
    };
    const options = {
        multi: false
    };

    const sub = {
        $push: {
            "pay_his": {
                det
            }
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