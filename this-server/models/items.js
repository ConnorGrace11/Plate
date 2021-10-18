const Joi = require('joi');
JOi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
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
    category: {
        type: [String],
        required: true,
        enum: ['breakfast', 'lunch', 'dinner', 'beverage']

    },
    subCategory: {
        type: [String],
    },
    description: {
        type: String,
        required: true
    },
    review: {
        type: [String],
    },
})

function validateItem(item) {
    const schema = {
      name: Joi.string().min(2).max(50).required(),
      price: Joi.number().min(0).required(),
      ingredients: Joi.string().min(2).max(50).required(),
      category: Joi.string().min(2).max(50).required(),
      subCategory: Joi.string().min(2).max(50).required(),
      description: Joi.string().min(2).max(50).required(),
      review: Joi.string().min(2).max(100)
    };
    return Joi.validate(item, schema);
  }

module.exports = mongoose.model('item', ItemSchema)
exports.validate = validateItem;