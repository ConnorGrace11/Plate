const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    todo: {
        type: String,
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Meals', mealSchema)