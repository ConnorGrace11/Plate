const Meal = require('../models/meals')
const fs = require('fs')
const path = require('path')

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
    console.log(req.file)
    // var img = fs.readFileSync(req.file.path)
    // var encodeImg = img.toString('base64')
    // var finalImg = {
    //     contentType: String,
    //     data: Buffer.from(encodeImg, 'base64')
    // };
    //const finalImg = Buffer.from(encodeImg, 'base64')
    const newMeal = new Meal({
        id: req.body.id,
        name: req.body.name,
        category: req.body.category,
        todo: req.body.todo,
        imgMeal: {
            data: fs.readFileSync(req.file.path),
            contentType: 'imgMeal/jpeg'
        }
    })

    try {
        const meal = await newMeal.save();
        res.json(meal);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};

exports.editMeal = async (req, res) => {
    if(req.body.name != null) {
        res.editMeal.name = req.body.name
    }
    if(req.body.category != null) {
        res.editMeal.category = req.body.category
    }
    if(req.body.todo != null) {
        res.editMeal.todo = req.body.todo
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
    
}

// https://www.youtube.com/watch?v=jn3tYh2QQ-g