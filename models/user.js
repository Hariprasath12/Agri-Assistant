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
    crops: 
        [{
            id: String,
            crop: String
        }]
    ,
    cropdiary: [{
        id: String,
        date: {type:Date,default: Date.now},
       
        des: String,
        By: String
    }],
    product:[{
      id:String,
      name:String,
      quantity:String,
      Active:Boolean,
      img:[],
      date:Date,
 

 }],
 payment:Number,
 pay_his:[{
  id:String,
  amount:Number,
  to:Number,
  from:Number,
  date:{type:Date,default: Date.now}
  
 }],
 loc: {
    type: [Number],  
    index: '2d'      
    },
    img:String,
    reg_date:{type:Date,default: Date.now},
    verify: { type: Boolean, default: false }
   
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {phone: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
