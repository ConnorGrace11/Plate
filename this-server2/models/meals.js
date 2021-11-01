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
    imgMeal:
    {
        data: Buffer,
        contentType: String
    }
    // imgMeal: 
    // {
    //     type: String,
    // }
})

module.exports = mongoose.model('Meals', mealSchema)