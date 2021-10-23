const Restaurant = require('../models/restaurants')
const Item = require('../models/items')

// getting all
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


// getting one restaurant by id
exports.getARestaurant = (req, res) => {
    res.status(200).json(res.restaurant)
};

// creating a new restaurant (POST request)
exports.createRestaurant = async (req, res) => {
    const added = new Restaurant({
        name: req.body.name,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        rating: req.body.rating,
    })

    try {
        const newRestaurant = await added.save();
        res.json(newRestaurant);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};

exports.deleteRestaurant = async (req, res) => {
    try{
        await res.restaurant.remove();
        res.json({ message: 'deleted restaurant' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.editRestaurant = async (req, res) => {
    if(req.body.name != null) {
        res.restaurant.name = req.body.name
    }
    if(req.body.location != null) {
        res.restaurant.location = req.body.location
    }
    if(req.body.phoneNumber != null) {
        res.restaurant.phoneNumber = req.body.phoneNumber
    }
    if(req.body.rating != null) {
        res.restaurant.rating = req.body.rating
    }
};

exports.getAllRestaurantItems = async (req, res) => {
    try {
        const items = await Item.find({restaurantId:req.params.restaurantId});
        res.status(200).json(items);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

exports.getRestaurantItem = async (req, res) => {
    try {
        const items = await Item.findById(req.params. itemId);
        res.status(200).json(items);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};