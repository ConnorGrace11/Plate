const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
})

function validateRating(rating) {
    const schema = {
      restaurantId: Joi.string().min(20).max(30).required(),
      itemId: Joi.string().min(2).max(50).required(),
      rate: Joi.number().min(0).max(5).required(),
      description: Joi.string().min(2).max(50).required(),
      date: Joi.string().min(2).max(50),
    };
    return Joi.validate(rating, schema);
  }

module.exports = mongoose.model('rating', RatingSchema)
exports.validate = validateRating;