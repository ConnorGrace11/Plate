const auth = require('../models/users')
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.SECRET;

exports.getUserId = async (req, res, next) => {
    let user;
    try {
        const name = ({ username: req.params.username})

        user = await auth.findOne(name)
        if(user == null) {
            return res.status(404).json({ message: 'cant find user' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.user = user
    // console.log(res.user)
    next()
}

exports.restrictTo = (...roles) => {
    return async (req, res, next) => {
        const name = ({ username: req.params.username})
        const findRole = await auth.findOne(name)
        const role = findRole.role

        if(roles.includes(role)) {
            next()
        } else {
            return res.status(401).json({ error: "unauthorized" })
        }
    }
};

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
                    res.status(200).json(user)
                }).catch((error) => {
                    res.status(500).json({ error: error.message })
                })
            })
        }
}

exports.restrictGet = (req, res, next) => {
    const required = req.headers.authorization.split(' ')[1];
    
    if(!required) {
        return res.status(500).json({ message: "no token provided" })
    } else {
        jwt.verify(required, tokenSecret, async (err, user) => {
            if (err) return res.status(500).json({ error: 'failed to authenticate token' })
            req.user = user

            console.log(req.user.role)

            if(req.user.role == 'admin') {
                next()
            } else {
                res.status(401).json({ message: "unauthorized" })
            }
        })
    }
}