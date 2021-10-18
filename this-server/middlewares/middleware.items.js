const Item = require('../models/items')

exports.getItemId = async (req, res, next) => { 
    let item;
    try {
        item = await Item.findById(req.params.id)
        if(item == null) {
            return res.status(404).json({ message: 'cant find Item' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.item = item
    next()
}