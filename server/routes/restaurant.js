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

router.get('/:restaurantId/items/', restaurantMiddleware.getRestaurantId, itemControl.getAllItems);
router.get('/:restaurantId/items/:itemId', restaurantMiddleware.getRestaurantId, itemMiddleware.getItemId,itemControl.getItem);
router.post('/:restaurantId/items/', restaurantMiddleware.getRestaurantId, itemControl.createItem);
router.patch('/:restaurantId/items/:itemId', itemMiddleware.getItemId, itemControl.editItem);
router.delete('/:restaurantId/items/:itemId', itemMiddleware.getItemId, itemControl.deleteItem);

module.exports = router