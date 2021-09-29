const Restaurant = require('../models/restaurant')

// getting all
exports.getAll = async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.status(201).json(restaurants);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

// getting one restaurant by id
exports.getOne = (req, res) => {
    res.status(200).json(res.restaurant)
};

// creating a new restaurant (POST request)
exports.createOne = async (req, res) => {
    const added = new Restaurant({
        name: req.body.name,
        location: req.body.location,
        rating: req.body.rating,
    })

    try {
        const newRestaurant = await added.save();
        res.json(newRestaurant);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};

exports.deleteOne = async (req, res) => {
    try{
        await res.restaurant.remove();
        res.json({ message: 'deleted restaurant' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.updateOne = async (req, res) => {
    if(req.body.name != null) {
        res.restaurant.name = req.body.name
    }
    if(req.body.location != null) {
        res.restaurant.location = req.body.location
    }
    if(req.body.rating != null) {
        res.restaurant.rating = req.body.rating
    }
};