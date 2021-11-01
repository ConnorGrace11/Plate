const express = require('express');
const router = express.Router();
const control = require('../controllers/meal.controller');
const middleware = require('../middlewares/middleware.meal');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*3
    },

})

router.get('/', control.getAllMeals);
router.get('/:id', middleware.getMealId, control.getAMeal);
router.post('/', control.createMeal);
router.patch('/:id', middleware.getMealId, control.editMeal);
router.delete('/:id', middleware.getMealId, control.deleteMeal);

module.exports = router;
