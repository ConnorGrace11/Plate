const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "guest",
        enum: ["guest", "user", "admin"]
    }
});

module.exports = mongoose.model('users', Users)