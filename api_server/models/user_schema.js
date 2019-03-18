const mongoose = require('mongoose');

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

module.exports = mongoose.model('user', userSchema);
