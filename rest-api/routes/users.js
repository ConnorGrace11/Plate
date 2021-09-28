const express = require('express');
const router = express.Router();
const User = require('../models/user');
const control = require('../controllers/user.controller');
const middleware = require('../middlewares/middleware');

router.get('/', control.getAll);
router.get('/:id', middleware.getUsers, control.getOne);
router.post('/', control.createOne);
router.patch('/:id', middleware.getUsers, control.updateOne);
router.delete('/:id', middleware.getUsers, control.deleteOne);

module.exports = router