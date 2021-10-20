const Joi = require('joi');
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

function validateRestaurant(restaurant) {
    const schema = {
      name: Joi.string().min(2).max(50).required(),
      location: Joi.string().min(2).max(100).required(),
      rating: Joi.number().min(1).required(),
    };
    return Joi.validate(restaurant, schema);
  }

module.exports = mongoose.model('Restaurant', RestaurantSchema);
exports.validate = validateRestaurant;