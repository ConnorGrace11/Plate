const Restaurant = require('../models/restaurants')

exports.getId = async (req, res, next) => { 
    let restaurant;
    try {
        restaurant = await Restaurant.findById(req.params.id)
        if(restaurant == null) {
            return res.status(404).json({ message: 'cant find restaurant' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.restaurant = restaurant
    next()
}