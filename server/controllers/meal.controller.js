const Meal = require('../models/meals')

exports.getAllMeals = async (req, res) => {
    try {
        const grabMeals = await Meal.find();
        res.status(201).json(grabMeals);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.createMeal = async (req, res) => {
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
};
