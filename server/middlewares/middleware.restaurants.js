const Restaurant = require('../models/restaurants')

exports.getRestaurantId = async (req, res, next) => {
    let restaurant;
    try {
        restaurant = await Restaurant.findById(req.params.restaurantId)
        if(restaurant == null) {
            return res.status(404).json({ message: 'Restaurant not found.' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.restaurant = restaurant
    next()
}
