const User = require('../models/user')

// getting all
exports.getAll = async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

// getting one user by id
exports.getOne = (req, res) => {
    res.status(200).json(res.user)
};

// creating a new user (POST request)
exports.createOne = async (req, res) => {
    const added = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const newUser = await added.save();
        res.json(newUser);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};

exports.deleteOne = async (req, res) => {
    try{
        await res.user.remove();
        res.json({ message: 'deleted user' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.updateOne = async (req, res) => {
    if(req.body.username != null) {
        res.user.username = req.body.username
    }
    if(req.body.email != null) {
        res.user.email = req.body.email
    }
    if(req.body.password != null) {
        res.user.password = req.body.password
    }
    try{
        const modifiedUser = await res.user.save();
        res.json(modifiedUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};