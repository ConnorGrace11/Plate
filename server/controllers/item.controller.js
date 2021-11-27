const Item = require('../models/items')
const fs = require('fs')
const upload = require("../cloudHelper").upload;
const bodyParser = require("body-parser")

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find({restaurantId:req.params.restaurantId})
        res.status(200).json(items);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

// getting one item by id
exports.getItem = (req, res) => {
    res.status(200).json(res.item)
};

// creating a new Item (POST request)
exports.createItem = async (req, res) => {
    let urls = [];
    let multiple = async (path) => await upload(path)
    for (const file of req.files){
        const {path} = file;
        const newPath = await multiple(path);
        urls.push(newPath);
        fs.unlinkSync(path);
    }
    if (urls) {
        const newItem = new Item({
            restaurantId: req.body.restaurantId,
            name: req.body.name,
            price: req.body.price,
            calories: req.body.calories,
            ingredients: req.body.ingredients,
            allergens: req.body.allergens,
            category: req.body.category,
            subCategory: req.body.subCategory,
            description: req.body.description,
            ratingCount: req.body.ratingCount,
            ratingNumber: req.body.ratingNumber,
            imgMeal: urls
        })
        console.log(req.body.name )
        try {
            const item = await newItem.save();
            res.json(item);
        } catch (error) {
            return res.status(500).send({ message: error.message })
        }
    }
};

exports.deleteItem = async (req, res) => {
    try{
        await res.item.remove();
        res.json({ message: 'Item deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}; 

exports.editItem = async (req, res) => {
    if (req.body.restaurantId != null) {
        res.item.restaurantId = req.body.restaurantId
    }
    if (req.body.name != null) {
        res.item.name = req.body.name
    }
    if (req.body.price != null) {
        res.item.price = req.body.price
    }
    if (req.body.calories != null) {
        res.item.calories = req.body.calories
    }
    if (req.body.ingredients != null) {
        res.item.ingredients = req.body.ingredients
    }
    if (req.body.allergens != null) {
        res.item.allergens = req.body.allergens
    }
    if (req.body.category != null) {
        res.item.category = req.body.category
    }
    if (req.body.subCategory != null) {
        res.item.subCategory = req.body.subCategory
    }
    if (req.body.description != null) {
        res.item.description = req.body.description
    }
    if (req.body.ratingCount != null) {
        res.item.ratingCount = req.body.ratingCount
    }
    if (req.body.ratingNumber != null) {
        res.item.ratingNumber = req.body.ratingNumber
    }
    if (req.body.imgMeal != null) {
        res.item.imgMeal = req.body.imgMeal
    }
    try {
        const modifiedItem= await res.item.save();
        res.json(modifiedItem)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};