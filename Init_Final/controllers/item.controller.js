const Item = require('../models/item')

// getting all
exports.getAll = async (req, res) => {
    try {
        const items = await Item.find()
        res.status(201).json(items);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

// getting one item by id
exports.getOne = (req, res) => {
    res.status(200).json(res.item)
};

// creating a new item (POST request)
exports.createOne = async (req, res) => {
    const added = new Item({
        name: req.body.name,
        price: req.body.price,
        ingredients: req.body.ingredients,
        category: req.body.category,
        subCategory: req.body.subcategory,
        description: req.body.description,
        review: req.body.review
    })

    try {
        const newItem = await added.save();
        res.json(newItem);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};

exports.deleteOne = async (req, res) => {
    try{
        await res.item.remove();
        res.json({ message: 'deleted item' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.updateOne = async (req, res) => {
    if(req.body.name != null) {
        res.item.name = req.body.name
    }
    if(req.body.price != null) {
        res.item.price = req.body.price
    }
    if(req.body.ingredients != null) {
        res.item.ingredients = req.body.ingredients
    }
    if(req.body.category != null) {
        res.item.category = req.body.category
    }
    if(req.body.subCategory != null) {
        res.item.subCategory = req.body.subCategory
    }
    if(req.body.description != null) {
        res.item.description = req.body.description
    }
    if(req.body.review != null) {
        res.item.review = req.body.review
    }
    try{
        const modifiedItem = await res.item.save();
        res.json(modifiedItem)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};