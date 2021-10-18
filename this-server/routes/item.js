const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const control = require('../controllers/item.controller');
const middleware = require('../middlewares/middleware.items');

router.get('/', control.getAllItems);
router.get('/:id', middleware.getItemId, control.getItem);
router.post('/', control.createItem);
router.patch('/:id', middleware.getItemId, control.editItem);
router.delete('/:id', middleware.getItemId, control.deleteItem);

module.exports = router