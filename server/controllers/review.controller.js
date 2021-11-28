const Review = require('../models/reviews')

// getting all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: 1 })
    res.status(200).json(reviews)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

exports.getAllRestaurantReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ restaurantId: req.params.restaurantId })
    res.status(200).json(reviews)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

exports.getAllItemReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ itemId: req.params.itemId })
    res.status(200).json(reviews)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

// getting one review by id
exports.getAReview = (req, res) => {
  res.status(200).json(res.review)
}

// creating a new review (POST request)
exports.createReview = async (req, res) => {
  try {
    const reviewedBefore = await Review.findOne({
      username: req.body.username,
      itemId: req.body.itemId,
    }).count()
    if (reviewedBefore == '0') {
      const added = new Review({
        username: req.body.username,
        itemId: req.body.itemId,
        restaurantId: req.body.restaurantId,
        rating: req.body.rating,
        description: req.body.description,
        date: req.body.date,
        imgItem: req.body.imgItem,
      })

      try {
        const newReview = await added.save()
        res.json(newReview)
      } catch (error) {
        return res.status(500).send({ message: error.message })
      }
    } else {
      return res.status(200).send({ message: 'Item already reviewed' })
    }
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

exports.deleteReview = async (req, res) => {
  try {
    await res.review.remove()
    res.json({ message: 'Deleted review' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.editReview = async (req, res) => {
  if (req.body.username != null) {
    res.review.username = req.body.username
  }
  if (req.body.itemId != null) {
    res.review.itemId = req.body.itemId
  }
  if (req.body.restaurantId != null) {
    res.review.restaurantId = req.body.restaurantId
  }
  if (req.body.rating != null) {
    res.review.rating = req.body.rating
  }
  if (req.body.description != null) {
    res.review.description = req.body.description
  }
  if (req.body.date != null) {
    res.review.date = req.body.date
  }
  if (req.body.imgItem != null) {
    res.review.imgItem = req.body.imgItem
  }
  try {
    const modifiedReview = await res.review.save()
    res.json(modifiedReview)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
