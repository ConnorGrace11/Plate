const express = require('express');
const router = express.Router();
const User = require('../models/user')

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//get specific by id
router.get('/:id', (req, res) => {
    
})

// creating new user
router.post('/', async (req, res) => {
    const added = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const newUser = await added.save();
        res.json(newUser);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// edit current user
router.patch('/:id', (req, res) => {

})

// deleting by id
router.delete('/:id', (req, res) => {

})

module.exports = router