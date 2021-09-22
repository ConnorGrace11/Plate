const express = require('express');
const router = express.Router();

const courses = [
    { id:1, name: 'course1' },
    { id:2, name: 'course2' },
    { id:3, name: 'course3' },
];

router.get('/', (req,res) => {
    res.send(courses);
});

router.post('/', (req, res) => {
    const { error } = validateCourse(req.body); //Object deconst.
    if (error) return res.status(400).send(result.error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');
    
    const schema = {
        name: Joi.string().min(3).required()
    };
    
    const { error } = validateCourse(req.body); //Object deconst.
    if (error) return res.status(400).send(result.error.details[0].message);

    course.name = req.body.name;
    res.send(course);

});

router.get('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

router.delete('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course)
});

function validateCourse(router){
    const schema = {
        name: Joi.string().min(3).required()
    };
    
    return Joi.validate(router, schema);
}

//module.exports = router;