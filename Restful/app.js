const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = express.Router();

require('dotenv/config')


// listen to server
app.listen(3000);

//middlewares

// good use for middleware is auth 
// app.use('/', () => {
//     console.log('This is a middleware running')
// })

// app.use('/', auth)

// routes 

app.get('/', (req,res) => {
    res.send("Listening on port 3000...")
})

//connect to DB

mongoose.connect()


