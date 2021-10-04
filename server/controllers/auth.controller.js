const authUser = require('../models/user.auth')
const middleware = require('../middlewares/middleware.user');
const bcrypt = require('bcrypt');
const rounds = 10;

const jwt = require('jsonwebtoken');
const user = require('../models/user');
const userAuth = require('../models/user.auth');
const tokenSecret = process.env.SECRET;

exports.getUsers = async (req, res) => {
    let required = req.headers.authorization
    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required.split(' ')[1], tokenSecret, (err, value) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = value.data
        })
    }

    try {
        const users = await authUser.find()
        res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
        // res.status(200).json({ id: req.params.id, email: req.body.email });
};

exports.getUserById = async (req, res) => {
    let required = req.headers.authorization

    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required.split(' ')[1], tokenSecret, (err, value) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = value.data   
        })
    }
    try {
        const user = await authUser.findById(req.params.id)
        res.status(200).send(user);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

exports.logIn = (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    authUser.findOne({ email: email })
        .then(user => {
            if (!user) return res.status(404).json({ error: 'no user with that email found' })
            else {
                bcrypt.compare(password, user.password, (error, match) => {
                    if (error) return res.status(500).json(error)
                    else if (match) res.status(200).json({ status: 'Successful login', token: generateToken(user) })
                    else return res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => {
            return res.status(500).json({ message: error.message })
        });
};

exports.signUp = (req, res) => {
    bcrypt.hash(req.body.password, rounds, (error, hash) => {
        const exists = authUser.findOne({ email: req.body.email })
        if (error) return res.status(500).json({ message: error.message })
        else {
            const newUser = authUser({ email: req.body.email, password: hash })
            if(req.body.email == exists) return res.status(401).json({ message: error.message})
            newUser.save()
                .then(user => {
                    res.status(200).json({ status: 'SUCCESS', message: 'successful signup', data: user, token: generateToken(user) })
                })
                .catch(error => {
                    res.status(500).json(error)
                })
            }
        }
)};

// exports.tester = (req, res) => {
//     res.status(200).json(req.user);
// };

function generateToken(user) {
    return jwt.sign({ data: user }, tokenSecret, { expiresIn: '24h' });
};