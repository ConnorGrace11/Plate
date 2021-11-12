const express = require('express');
const router = express.Router();
const control = require('../controllers/meal.controller');
const middleware = require('../middlewares/middleware.meal');
const mealModel =  require('../models/meals')
const multer = require('multer')
const path = require('path')
const GridFsStorage = require('multer-gridfs-storage')

//defining the stroage for the images
const storage = multer.diskStorage({
    //setting the destination for the file
    destination: (req, file, cb) => {
        cb(null, 'Uploads/')
    },
    //adding back the extension
    filename: (req, file, cb)=>{
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    } 
});

const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1000000 * 1000
    }
})

router.get('/', control.getAllMeals);
router.get('/:id', middleware.getMealId, control.getAMeal);
router.get('/getMealImg/:id', middleware.getMealId, control.getMealImg);
router.post('/createMeal', upload.array('imgMeal'), control.createMeal);
router.patch('/:id', middleware.getMealId, control.editMeal);
router.delete('/:id', middleware.getMealId, control.deleteMeal);

module.exports = router;