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
    phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    track: [{
        id: String,
        price: Number,
        delivery: {
            type: Boolean,
            default: false
        },
        Date: {
            type: Date,
            default: Date.now
        },
        user: [{
            name: String,
            phone: Number,
            email: String,
        }],
        to: String,
        from: String,
        location: [{
            Date: {
                type: Date,
                default: Date.now
            },
            location: String
        }],
        expecteddate: {
            type: Date
        }
    }],
    center: [{
        id: String,
        location: String,
        address: String,
        phone: Number,
        email: String
    }],
    price: [{
        km: Number,
        base: Number
    }]
});

const User = module.exports = mongoose.model('log', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {
        email: username
    }
    User.findOne(query, callback);
}
module.exports.inittrack = function(info, id, callback) {


    User.update({
        _id: id
    }, {
        $push: {
            "track": info
        }
    }, callback);

}
module.exports.trackbyid = function(id, callback) {
    // db.users.find({awards: {$elemMatch: {award:'National Medal', year:1975}}})

    User.find({
        track: {
            $elemMatch: {
                _id: id
            }
        }
    }, 'track.location', callback);

}
module.exports.location = function(id, callback) {
    // db.users.find({awards: {$elemMatch: {award:'National Medal', year:1975}}})

    User.find({
        _id: id
    }, 'center', callback);

}
module.exports.addlocation = function(info, id, callback) {
    // db.users.find({awards: {$elemMatch: {award:'National Medal', year:1975}}})
    console.log(info);
    User.update({
        _id: id
    }, {
        $push: {
            "center": info
        }
    }, callback);

}

module.exports.updatetrack = function(info, id, callback) {
    // db.users.find({awards: {$elemMatch: {award:'National Medal', year:1975}}})
    console.log(info);
    User.update({
        "_id": id,
        "track._id":info.id
    }, {
        $push: {
            "track.$.location": info.location
        }
    }, callback);

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