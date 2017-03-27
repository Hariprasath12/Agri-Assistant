const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    address: {
        type: String,

    },
    acres: {
        type: String,

    },
    irr: {
        type: String,

    },
    farm: {
        type: String,

    },
    crops: [{
        id: String,
        date: {
            type: Date,
            default: Date.now
        },
        crop: String
    }],
    cropdiary: [{
        id: String,
        date: {
            type: Date,
            default: Date.now
        },
 By: String,
 name:String,
        des: String
       
    }],
    product: [{
        id: String,
        name: String,
        quantity: String,
        Active: Boolean,
        track:{
        type: String,
        default: null
    },
        img: [],
        date: Date,


    }],
    payment: Number,
    pay_his: [{
        id: String,
        amount: Number,
        to: Number,
        from: Number,
        date: {
            type: Date,
            default: Date.now
        }

    }],
    loc: {
        type: [Number],
        index: '2d'
    },
    img: String,
    reg_date: {
        type: Date,
        default: Date.now
    },
    verify: {
        type: Boolean,
        default: false
    }

});

const User = module.exports = mongoose.model('User', UserSchema);



module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}


module.exports.getUserByUsername = function(username, callback) {
    const query = {
        phone: username
    }
    User.findOne(query, callback);
}
module.exports.getCrops = function(id, callback) {

    User.findById(id, 'crops', callback);
}


module.exports.updateCrops = function(crops, id, callback) {


    console.log(crops);

    User.update({
        _id: id
    }, {
        $push: {
            "crops": crops
        }
    }, callback);
}

module.exports.updateCropdiary = function(id,crop, callback) {
const con={_id:id};
const update={$push:{"cropdiary":crop}};
const options={ multi: false}

    User.update(con,update,options,callback);
}


module.exports.deleteCrops = function(del, id, callback) {
    const con = {
        _id: id
    };
    const update = {
        $pull: {
            "crops": {
                "_id": del
            }
        }
    };
    const options = {
        multi: false
    }

    User.update(con, update, options, callback);
}




module.exports.payment = function(id, callback) {

    User.findById(id, 'payment', callback);
}



module.exports.cropdDiary = function(id, callback) {

    User.findById(id, 'cropdiary', callback);
}
module.exports.productHistory = function(id, callback) {

    User.findById(id, 'product', callback);
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
    console.log(det);
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
            "pay_his": 
                det
            
        }
    };

    User.update(con, sub, options, callback);

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

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}