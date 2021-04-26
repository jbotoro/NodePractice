// REpresentational State Transfer (REST)
// CRUD Operations (Create Read Update Delete)

//convention for api endpoints is to include api on address
// i.e jordansblog.com/api/customers

const Joi = require('joi');
const express = require('express');
const app = express();

//add middleware to allow access to req.body
app.use(express.json());


// functions that app has available to it
// app.get();
// app.post();
// app.put();
// app.delete();

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
]

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/api/courses', (req,res) => {
    res.send(courses);
})

//post

app.post('/api/courses', (req,res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

//
app.put('/api/courses/:id', (req,res) => {
    // look up course if ! then return 404
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found')
    // validate if invalid return 400
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    

    // update course / return updated course
    course.name = req.body.name;
    res.send(course);
})

// get individual course

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found')
    res.send(course);
})

app.delete('/api/courses/:id', (req,res) => {
    // check if id is valid / exists
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found')

    // delete course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // return same course
    res.send(course);
})

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


