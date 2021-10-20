const express = require('express');
const router = express.Router();
const Restaurants = require('../models/restaurants');
const control = require('../controllers/restaurant.controller');
const middleware = require('../middlewares/middleware.resaurants');

router.get('/', control.getAllRestaurants);
router.get('/:id', middleware.getId, control.getARestaurant);
router.get('/:restaurantId/items/', middleware.getId, control.getAllRestaurantItems);
router.post('/', control.createRestaurant);
router.patch('/:id', middleware.getId, control.editRestaurant);
router.delete('/:id', middleware.getId, control.deleteRestaurant);

module.exports = router