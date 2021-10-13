const express = require('express');
const router = express.Router();
const User = require('../models/user');
const control = require('../controllers/user.controller');
const middleware = require('../middlewares/middleware.user');

// testing route, was used for basics
router.get('/', control.getAll);
router.get('/:id', middleware.getId, control.getOne);

router.post('/', control.createOne);

router.patch('/:id', middleware.getId, control.updateOne);

router.delete('/:id', middleware.getId, control.deleteOne);
//test

module.exports = router