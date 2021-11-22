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
        console.log(req.body.name)
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
    let restaurantId = req.body.restaurantId
    console.log(restaurantId)
    // let updates = {}
    // console.log(JSON.stringify(req.body.restaurantId))
    // updates["restaurantId"] = req.body.restaurantId
    // updates['name'] = req.body.name
    // updates['price'] = req.body.price
    // updates['ingredients'] = req.body.ingredients
    // updates['allergens'] = req.body.allergens
    // updates['category'] = req.body.category
    // updates['subCategory'] = req.body.subCategory
    // updates['description'] = req.body.description
    // updates['ratingCount'] = req.body.ratingCount
    // updates['ratingNumber'] = req.body.ratingNumber
    // updates['imgMeal'] = req.body.imgMeal

    // if (req.body.restaurantId) {
    //     console.log("somebody")
    //     updates["restaurantId"] = req.body.restaurantId
    // }
    // if (req.body.name) {
    //     updates['name'] = req.body.name
    // }
    // if (req.body.price ) {
    //     updates['price'] = req.body.price
    // }
    // if (req.body.calories ) {
    //     updates['calories'] = req.body.calories
    // }
    // if (req.body.restaurantId ) {
    //     updates['ingredients'] = req.body.ingredients
    // }
    // if (req.body.allergens ) {
    //     updates['allergens'] = req.body.allergens
    // }
    // if (req.body.category ) {
    //     updates['category'] = req.body.category
    // }
    // if (req.body.subCategory ) {
    //     updates['subCategory'] = req.body.subCategory
    // }
    // if (req.body.description ) {
    //     updates['description'] = req.body.description
    // }
    // if (req.body.ratingCount ) {
    //     updates['ratingCount'] = req.body.ratingCount
    // }
    // if (req.body.ratingNumber ) {
    //     updates['ratingNumber'] = req.body.ratingNumber
    // }
    // if (req.body.imgMeal ) {
    //     updates['imgMeal'] = req.body.imgMeal
    // }
    // console.log(updates)
    // Item.findByIdAndUpdate(req.params.itemId, updates,
    //     function (err,docs){
    //         if (err){
    //             console.log(err)
    //         }
    //         else{
    //             res.json(docs)
    //         }
    //     }) 
};