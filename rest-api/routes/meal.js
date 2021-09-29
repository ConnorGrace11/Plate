const express = require('express');
const router = express.Router();
const control = require('../controllers/auth.controller');
const Meal = require('../models/meals')

router.post('/', async (req, res) => {
    const newMeal = new Meal({
        id: req.body.id,
        name: req.body.name,
        category: req.body.category,
        todo: req.body.todo
    })

    try {
        const meal = await newMeal.save();
        res.json(meal);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
});

module.exports = router;