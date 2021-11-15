const Restaurant = require('../models/restaurants')
const fs = require('fs')
const upload = require("../cloudHelper").upload;

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
    const files = req.files
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
        const newRestaurant = new Restaurant({
            name: req.body.name,
            location: req.body.location,
            phoneNumber: req.body.phoneNumber,
            rating: req.body.rating,
            imgRestaurant: urls
        })
        try {
            const restaurant = await newRestaurant.save();
            res.json(restaurant);
        } catch (error) {
            return res.status(500).send({ message: error.message })
        }
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