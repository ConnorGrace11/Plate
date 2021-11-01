const auth = require('../models/users')
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.SECRET;
const privileged = process.env.SPECIAL;

// checks if there's a valid user with the 
// username provided in params
exports.getUserId = async (req, res, next) => {
    let user;
    try {
        const find = (req.params.username)
        user = await auth.findOne({ username: find })
        if(user == null) return res.status(404).json({ message: 'cant find user' })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.user = user
    // console.log(res.user)
    next()
}

// exports.restrictTo = (...roles) => {
//     return async (req, res, next) => {
//         const name = ({ username: req.params.username})
//         const findRole = await auth.findOne(name)
//         const role = findRole.role

//         if(roles.includes(role)) {
//             next()
//         } else {
//             return res.status(401).json({ error: "unauthorized" })
//         }
//     }
// };

// reads everything it needs from the jwt token
// to display user details, need to authenticate
// to get the special token

exports.userDataFromToken = (req, res, next) => {
    const required = req.headers.authorization.split(' ')[1];
    
    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required, tokenSecret, async (err, user) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = user

            await auth.findOne({ email: req.user.email })
                .then((user) => {
                    res.status(200).json({ user: user })
                }).catch((error) => {
                    res.status(500).json({ error: error.message })
                })
            })
        }
}

// restricting access to routes by checking the role of user
exports.restrictGet = (req, res, next) => {
    const required = req.headers.authorization.split(' ')[1];
    
    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required, tokenSecret, async (err, user) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = user

            if(req.user.role == privileged) {
                next()
            } else {
                res.status(401).json({ message: "unauthorized" })
            }
        })
    }
}

// only allowing delete if the token matches the param value
// given as well as the id
exports.restrictDelete = (req, res, next) => {
    const required = req.headers.authorization.split(' ')[1];
    let needed;

    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required, tokenSecret, async (err, user) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = user

            needed = await auth.findById(req.user._id)
            if(req.user._id == needed._id && req.params.username == req.user.username) {
                next()
            } else {
                res.status(401).json({ message: "unauthorized" })
            }
        })
    }
}

// only allowing updating of user if the token matches 
// the username param value given as well as the id

exports.restrictPatch = (req, res, next) => {
    const required = req.headers.authorization.split(' ')[1];
    let needed;

    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required, tokenSecret, async (err, user) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = user

            needed = await auth.findById(req.user._id)
            if(req.user._id == needed._id && req.params.username == req.user.username) {
                next()
            } else {
                res.status(401).json({ message: "unauthorized" })
            }
        })
    }
}