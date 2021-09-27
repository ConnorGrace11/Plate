const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
 .then(() => console.log('Connected to MongoDB...'))
 .catch(err => console.error('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
    name: String, 
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Angular Course',
        author: 'Elijah',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
};

async function getCourses(){
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({ author:'Elijah', isPublished: true})
        //.find({author: /^Elijah/})    //starts with
        // .find({author: /Goodman$/i}) // ends with
        // .find({author: /*Elijah*/i}) //contains string
        //.or([{ author: 'Elijah'}, {isPublished: true }])
        // .skip((pageNumber -1) * pageSize)
        // .limit(pageSize)
        // .sort({ name: 1})
    console.log(courses);
}

getCourses();