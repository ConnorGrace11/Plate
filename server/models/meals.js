const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    todo: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Meals', mealSchema)