const authUserLogin = require('../models/user.auth.login')
const authUserSignup = require('../models/user.auth.signup')
const bcrypt = require('bcrypt');
const rounds = 10;
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.SECRET;

// exports.getUsers = async (req, res) => {
//     let required = req.headers.authorization
//     if(!required) {
//         return res.status(500).json({ message: "no token provided" })
//     } else {
//         jwt.verify(required.split(' ')[1], tokenSecret, (err, value) => {
//             if (err) return res.status(500).json({ error: 'failed to authenticate token' })
//             req.user = value.data
//         })
//     }

//     await authUserLogin.find()
//         .then(user => {
//             res.status(200).json({ email: user.email })
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// };

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
        const user = await authUserLogin.findById(req.params.id)
        res.status(200).send(user);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

exports.logIn = (req, res) => {
    authUserLogin.findOne({ email: req.body.email })
        .then(user => {
            if (!user) return res.status(404).json({ error: 'no user with that email found' })
            else {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) return res.status(500).json(error)
                    else if (match) res.status(200).json({ status: 'Successful login', token: generateToken(user) })
                    else return res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => {
            return res.status(500).json({ message: error.message })
        })
};

exports.signUp = (req, res) => {
    
    bcrypt.hash(req.body.password, rounds, (error, hash) => {
        if (error) return res.status(500).json({ message: error.message })
        // if (req.body.email == authUserSignup.find(req.body.email)) return res.status(401).json({ message: 'email already exists' })
        else {
            const newUser = authUserSignup({ username: req.body.username, email: req.body.email, password: hash })
            newUser.save()
                .then(user => {
                    res.status(200).json({ status: 'SUCCESS', message: 'successful signup', username: user.username, email: user.email, token: generateToken(user) })
                })
                .catch( error => {
                    res.status(500).json(error.message)
                })
            }
        })
};
            
// exports.tester = (req, res) => {
//     res.status(200).json(req.user);
// };

function generateToken(user) {
    return jwt.sign({ data: user }, tokenSecret, { expiresIn: '24h' });
};
