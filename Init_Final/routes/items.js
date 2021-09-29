const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const control = require('../controllers/item.controller');
const middleware = require('../middlewares/itemMiddleware');

router.get('/', control.getAll);
router.get('/:id', middleware.getId, control.getOne);
router.post('/', control.createOne);
router.patch('/:id', middleware.getId, control.updateOne);
router.delete('/:id', middleware.getId, control.deleteOne);

module.exports = router