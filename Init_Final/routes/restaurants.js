const express = require('express');
const router = express.Router();
const Restaurants = require('../models/restaurant');
const control = require('../controllers/restaurant.controller');
const middleware = require('../middlewares/restaurantMiddleware');

router.get('/', control.getAll);
router.get('/:id', middleware.getId, control.getOne);
router.post('/', control.createOne);
router.patch('/:id', middleware.getId, control.updateOne);
router.delete('/:id', middleware.getId, control.deleteOne);

module.exports = router