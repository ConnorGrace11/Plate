const auth = require('../models/auth.users')

exports.getAuthId = async (req, res, next) => {
    let user;
    try {
        user = await auth.findById(req.params.id)
        if(user == null) {
            return res.status(404).json({ message: 'cant find user' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.user = user
    next()
}