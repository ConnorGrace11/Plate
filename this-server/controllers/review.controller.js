const Review = require('../models/reviews')

// getting all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


// getting one review by id
exports.getAReview = (req, res) => {
    res.status(200).json(res.review)
};

// creating a new review (POST request)
exports.createReview = async (req, res) => {
    const added = new Review({
        username: req.body.username,
        itemId: req.body.itemId,
        rating: req.body.rating,
        description: req.body.description,
        date: req.body.date
    })

    try {
        const newReview = await added.save();
        res.json(newReview);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};

exports.deleteReview = async (req, res) => {
    try{
        await res.review.remove();
        res.json({ message: 'Deleted review' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.editReview = async (req, res) => {
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