const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


//email, username, password

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength:3,
        trim:true,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength:8,
        maxlength: 50
    },
});

userSchema.methods.verifyPassword = function(inputedPlainTextPassword) {
    const hashedPassword = this.password;
    return bcrypt.compare(inputedPlainTextPassword, hashedPassword);
};

userSchema.pre('save', function(next) {
// hash and salt password
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(err => {
            console.log('Error in hashing password' + err);
            next(err);
        });
});

module.exports = mongoose.model('user', userSchema);
