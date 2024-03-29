const Item = require('../models/items')

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
    const added = new Item({
        restaurantId: req.body.restaurantId,
        name: req.body.name,
        price: req.body.price,
        ingredients: req.body.ingredients,
        allergens: req.body.allergens,
        category: req.body.category,
        subCategory: req.body.subCategory,
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

exports.deleteItem = async (req, res) => {
    try{
        await res.item.remove();
        res.json({ message: 'Item deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}; 

exports.editItem = async (req, res) => {
    if(req.body.restaurantId != null) {
        res.item.restaurantId = req.body.restaurantId
    }
    if(req.body.name != null) {
        res.item.name = req.body.name
    }
    if(req.body.price != null) {
        res.item.price = req.body.price
    }
    if(req.body.ingredients != null) {
        res.item.ingredients = req.body.ingredients
    } 
    if(req.body.allergens != null) {
        res.item.allergens = req.body.allergens
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