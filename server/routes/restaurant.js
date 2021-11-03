const express = require('express');
const router = express.Router();
const restaurantControl = require('../controllers/restaurant.controller');
const itemControl = require('../controllers/item.controller');
const restaurantMiddleware = require('../middlewares/middleware.restaurants');
const itemMiddleware = require('../middlewares/middleware.items');


router.get('/', restaurantControl.getAllRestaurants);
router.get('/:restaurantId', restaurantMiddleware.getRestaurantId, restaurantControl.getARestaurant);
router.post('/', restaurantControl.createRestaurant);
router.patch('/:restaurantId', restaurantMiddleware.getRestaurantId, restaurantControl.editRestaurant);
router.delete('/:restaurantId', restaurantMiddleware.getRestaurantId, restaurantControl.deleteRestaurant);


module.exports = router
