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
        type: String

    },
    soiltype:{
type: String
    },
    irr: {
        type: String

    },
    farm: {
        type: String

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
        des: String,
       cropname:String
    }],
    product: [{
        id: String,
        name: String,
        quantity: String,
        Active:{
            type: Boolean,
            default: Date.now
        },
        des:String,
        track:{
        type: String,
        default: null
    },

        img: [],
        date:  {
            type: Date,
            default: Date.now
        }


    }],
    payment: Number,
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
    loc:[
    {lat:Number,
        lon:Number}],
    img: String,
    reg_date: {
        type: Date,
        default: Date.now
    },
    verify: {
        type: Boolean,
        default: false
    },
    fav_post:[]

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

module.exports.list = function( callback) {

    User.find(callback);
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



module.exports.updateCropdiary = function(id,crop, callback) {
const con={_id:id};
const update={$push:{"cropdiary":crop}};
const options={ multi: false}

    User.update(con,update,options,callback);
}

module.exports.favpost = function(id,ref, callback) {
const con={_id:id};
const update={$addToSet:{"fav_post":ref}};
const options={ multi: false}

    User.update(con,update,options,callback);
}

module.exports.getfavpost = function(id, callback) {
    User.find({
        _id: id
    }, 'fav_post', callback);

}







module.exports.updateprofile = function(id,profile, callback) {
const con={_id:id};
const update={'name':profile.name,'irr':profile.irr,'acres':profile.acres,'soiltype':profile.soiltype,'farm':profile.farm,'address':profile.address};
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
module.exports.productlist = function(id,callback) {

    User.find({_id:id
       
    },'product', callback);
}

module.exports.profile = function(id,callback) {

    User.find({_id:id
       
    },'name phone address irr farm acres verify soiltype', callback);
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
            "pay_his": 
                det
            
        }
    };

    User.update(con, sub, options, callback);

}
module.exports.initproduct = function(info, id, callback) {


    User.update({
        _id: id
    }, {
        $push: {
            "product": info
        }
    },callback);
    


}
module.exports.updateimg = function(img, id, callback) {


    User.update({
        product:{ $elemMatch:{_id:id}}
    }, {
        $push: {
            "product.$.img": img
        }
    },callback);
    // console.log(id);
    // User.find({
    //     product:{ $elemMatch:{_id:id}}
    // },callback);
    }




module.exports.productbyid = function( id, callback) {
    User.find({_id:id},'product',callback);
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