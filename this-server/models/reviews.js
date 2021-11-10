const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
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
    imgItem: {
        type: String,
    },
})

function validateReview(review) {
    const schema = {
      username: Joi.string().min(20).max(30).required(),
      restaurantId: Joi.string().min(2).max(50).required(),
      itemId: Joi.string().min(2).max(50).required(),
      rating: Joi.number().min(0).max(5),
      description: Joi.string().min(2).max(50).required(),
      date: Joi.string().min(2).max(50),
      imgItem: Joi.string().min(50).max(80)
    };
    return Joi.validate(review, schema);
  }

module.exports = mongoose.model('Review', ReviewSchema)
exports.validate = validateReview;