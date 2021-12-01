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
    phoneNumber: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    imgRestaurant:{
        type: [String]
    },
})

function validateRestaurant(restaurant) {
    const schema = {
      name: Joi.string().min(2).max(50).required(),
      location: Joi.string().min(2).max(100).required(),
      phoneNumber: Joi.string().min(10).max(15).required(),
      rating: Joi.number().min(1).required(),
      imgRestaurant: Joi.number().min(2).max(50)
    };
    return Joi.validate(restaurant, schema);
  }

module.exports = mongoose.model('Restaurant', RestaurantSchema);
exports.validate = validateRestaurant;