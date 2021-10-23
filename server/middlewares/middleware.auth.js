const auth = require('../models/users')

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
