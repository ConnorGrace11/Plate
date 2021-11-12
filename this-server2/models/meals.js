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
    description: {
        type: String,
        required: true
    },
    imgMeal:
    {
        type: []
    },
    calories:
    {
        type: String
    },
    allergens:
    {
        type: []
    },
    ingredients:
    {
        type: String
    }
})

module.exports = mongoose.model('Meals', mealSchema)