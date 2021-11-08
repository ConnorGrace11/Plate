const express = require('express');
const router = express.Router();
const reviewControl = require('../controllers/review.controller');
const reviewMiddleware = require('../middlewares/middleware.reviews');


router.get('/', reviewControl.getAllReviews);
router.get('/:reviewId', reviewMiddleware.getReviewId, reviewControl.getAReview);
router.post('/', reviewControl.createReview);
router.patch('/:reviewId', reviewMiddleware.getReviewId, reviewControl.editReview);
router.delete('/:reviewId', reviewMiddleware.getReviewId, reviewControl.deleteReview);

module.exports = router;