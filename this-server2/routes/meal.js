const express = require('express');
const router = express.Router();
const control = require('../controllers/meal.controller');
const middleware = require('../middlewares/middleware.meal');
const multer = require('multer')
const path = require('path')

//defining the stroage for the images
const storage = multer.diskStorage({
    //setting the destination for the file
    destination: './imgMeal',
    //adding back the extension
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    } 

})
const upload = multer({
    storage: storage,
    limits:{
        fieldSize: 1024 * 1024 * 3
    }
})

router.get('/', control.getAllMeals);
router.get('/:id', middleware.getMealId, control.getAMeal);
router.get('/:id', middleware.getMealId, control.getMealImg);
router.post('/createMeal', upload.single('imgMeal'), control.createMeal);
router.post('/upload', upload.single('imgMeal'), control.upload);
router.patch('/:id', middleware.getMealId, control.editMeal);
router.delete('/:id', middleware.getMealId, control.deleteMeal);

module.exports = router;