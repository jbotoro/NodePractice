// REpresentational State Transfer (REST)
// CRUD Operations (Create Read Update Delete)

//convention for api endpoints is to include api on address
// i.e jordansblog.com/api/customers


const express = require('express');
const app = express();


// functions that app has available to it
// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/api/courses', (req,res) => {
    res.send([1,2,3]);
})

// get individual course

app.get('/api/courses/:id', (req,res) => {
    res.send(req.params.id);
})

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


