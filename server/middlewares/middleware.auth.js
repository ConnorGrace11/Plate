const auth = require('../models/users')

exports.getAuthId = async (req, res, next) => {
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