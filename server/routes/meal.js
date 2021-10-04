const express = require('express');
const router = express.Router();
const control = require('../controllers/meal.controller');
const Meal = require('../models/meals')

router.get('/', control.getAllMeals);
router.post('/', control.createMeal)

module.exports = router;