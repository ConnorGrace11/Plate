const mongoose = require('mongoose');

const AuthUserLogin = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Auth Users Login', AuthUserLogin)