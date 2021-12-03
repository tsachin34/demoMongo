

const mongoose = require("mongoose");
const express = require("express");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: connect with database using mongoose
require('./database/connection')

const userRoute= require('./routes/userRoute')



//4: make the data ready :
// const me = new User({
//     name: 'Rabin',
//     age: 22
// })


//5: save the data

app.use(userRoute)
app.listen(900)