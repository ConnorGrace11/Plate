const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    restaurantId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    calories:{
        type: String,
    },
    ingredients: {
        type: [String, String],
        required: true
    },
    allergens: {
        type: [String]
    },
    category: {
        type: [String],
        required: true,
        enum: ['breakfast', 'lunch', 'dinner','dessert', 'appetizer', 'side', 'beverage']

    },
    subCategory: {
        type: [String],
    },
    description: {
        type: String,
    },
    ratingCount: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    ratingNumber: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    imgMeal: {
        type: [String]
    }
})

function validateItem(item) {
    const schema = {
      restaurantId: Joi.string().min(20).max(30).required(),
      name: Joi.string().min(2).max(50).required(),
      price: Joi.number().min(0).required(),
      calories: Joi.number().min(1).max(50),
      ingredients: Joi.string().min(2).max(50).required(),
      allergens: Joi.string().min(2).max(50),
      category: Joi.string().min(2).max(50).required(),
      subCategory: Joi.string().min(2).max(50).required(),
      description: Joi.string().min(2).max(50),
      ratingCount: Joi.number().min(0).required(),
      ratingNumber: Joi.number().min(0).max(5).required(),
      imgMeal: Joi.string().min(2).max(50),
    };
    return Joi.validate(item, schema);
  }

module.exports = mongoose.model('item', ItemSchema)
exports.validate = validateItem;