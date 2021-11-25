const meals = require('../models/meals')

exports.getMealId = async (req, res, next) => {
    let editMeal;
    try {
        editMeal = await meals.findById(req.params.id)
        if(editMeal == null) {
            return res.status(404).json({ message: 'cant find meal' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.editMeal = editMeal
    next()
}

exports.getImage = async (req, res, next) => {
    meals.findOne({}, 'img createdAt', function(error, img) {
        if (error) return res.send(error);
        res.contentType('json');
        res.send(img);
    })
};

// const meals = require('../models/meals')

// exports.getMealId = async (req, res, next) => {
//     let editMeal;
//     try {
//         editMeal = await meals.findById(req.params.id)
//         if(editMeal == null) {
//             return res.status(404).json({ message: 'cant find meal' })
//         }
//     } catch (error) {
//         return res.status(500).json({ message: error.message })
//     }

//     res.editMeal = editMeal
//     next()
// }
