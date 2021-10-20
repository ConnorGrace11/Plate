const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    restaurantId:{
        type: String,
        required: true,
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
    ingredients: {
        type: [String],
        required: true
    },
    allergens: {
        type: [String]
    },
    category: {
        type: [String],
        required: true,
        enum: ['breakfast', 'lunch', 'dinner','dessert', 'side', 'beverage']

    },
    subCategory: {
        type: [String],
    },
    description: {
        type: String,
    },
    review: {
        type: [String],
    },
})

function validateItem(item) {
    const schema = {
      restaurantId: Joi.string().min(20).max(30).required(),
      name: Joi.string().min(2).max(50).required(),
      price: Joi.number().min(0).required(),
      ingredients: Joi.string().min(2).max(50).required(),
      allergens: Joi.string().min(2).max(50),
      category: Joi.string().min(2).max(50).required(),
      subCategory: Joi.string().min(2).max(50).required(),
      description: Joi.string().min(2).max(50),
      review: Joi.string().min(2).max(100)
    };
    return Joi.validate(item, schema);
  }

module.exports = mongoose.model('item', ItemSchema)
exports.validate = validateItem;