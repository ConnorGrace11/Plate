const Meal = require('../models/meals')
const _ = require('underscore')
const fs = require('fs')
const upload = require("../cloudHelper").upload;


exports.getAllMeals = async (req, res) => {
    try {
        const grabMeals = await Meal.find();
        res.status(201).json(grabMeals);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.getAMeal = async (req, res) => {
    try {
        const oneMeal = await Meal.findById(req.params.id)
        return res.status(200).json({ meal: oneMeal })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createMeal = async (req, res) => {
    const files = req.files
    try {
        let urls = [];
        let multiple = async (path) => await upload(path);
        for (const file of files){
            const {path} = file;
            console.log("path" , file);

            const newPath = await multiple(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            const newMeal = new Meal({
                id: req.body.id,
                name: req.body.name,
                category: req.body.category,
                description: req.body.description,
                imgMeal: urls,
                calories: req.body.calories,
                allergens: req.body.allergens,
                ingredients: req.body.ingredients
            });
            await newMeal.save()
                .then(saved => {
                    return res.json(saved)
                }).catch(error => {
                    return res.json(error);
                })
        }
        if (!urls) {
            return res.status(400)
        }

    } catch (error) {
        console.log("error:  ", error);
        return next(error);
    }
};

exports.editMeal = async (req, res) => {
    if(req.body.name != null) {
        res.editMeal.name = req.body.name
    }
    if(req.body.category != null) {
        res.editMeal.category = req.body.category
    }
    if(req.body.description != null) {
        res.editMeal.description = req.body.description
    }
    if(req.body.imgMeal != null){
        res.editMeal.imgMeal = req.body.imgMeal
    }
    if(req.body.calories != null) {
        res.editMeal.calories = req.body.calories
    }
    if(req.body.allergens != null){
        // res.editMeal.allergens.push(req.editMeal.allergens)
        // consol.log('This passed')
        res.editMeal.allergens = req.editMeal.allergens
    }
    if(req.body.ingredients != null) {
        res.editMeal.ingredients = req.body.ingredients
    }
    try{
        const modifiedMeal = await res.editMeal.save();
        res.json(modifiedMeal)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

exports.deleteMeal = async (req, res) => {

    try {
        await res.editMeal.remove();
        res.json({ message: "meal has been removed" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getMealImg = async (req, res) => {
    try {
        const selectedMeal = await Meal.findById(req.params.id)
        return res.status(200).json({ imgMeal: selectedMeal.imgMeal})
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// https://www.youtube.com/watch?v=jn3tYh2QQ-g
