const express = require('express');
const router = express.Router();
const control = require('../controllers/meal.controller');
const middleware = require('../middlewares/middleware.meal');
const Meal = require('../models/meals')

router.get('/', control.getAllMeals);
router.post('/', control.createMeal);
router.patch('/:id', middleware.getMealId, control.editMeal);
router.delete('/:id', middleware.getMealId, control.deleteMeal);

module.exports = router;