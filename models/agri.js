const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
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
        required: true,
        unique: true
    },
    clg: {
        type: String,
        required: true
    },
   qualification: {
        type: String,
        required: true
    },
    img:String,
    certificate:String,
    verify: { type: Boolean, default: false },
  password: {
    type: String,
    required: true
  },
  post:[{
       id:String,
       title:String,
       date: { type: Date, default: Date.now},
       content:String,
       tag:[],
       
  }],
   review:[{
          id:String,
          stars:Number,
          cmt:String
        }]
});


const User = module.exports = mongoose.model('agri', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}
module.exports.getPost = function(id, callback) {
  
    User.find({_id:id},'post',callback);
   
}



module.exports.addPost = function(post, callback) {
        

 User.update({_id:post.id},{$push:{"post":post}},callback);
   
}


module.exports.getUserByUsername = function(username, callback) {
    const query = {
        phone: username
    }
    User.findOne(query, callback);
}

module.exports.getAllPosts = function( callback) {
   
    User.find({},'post' ,callback);
}









module.exports.deletePost = function(del, callback) {
    
  

const con={_id:del.userid};
const update={$pull:{"post":{"_id":del.id}}};
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






module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}