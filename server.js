const express = require('express');
const mongoose = require('mongoose');
//const foodRouter = require('./routes/foodRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json
mongoose.connect('mongodb+srv://pos:zljNjYO2rJ3RKfRf@cluster0-mtjby.gcp.mongodb.net/pos?retryWrites=true&w=majority',{useNewUrlParser:true});

//app.use(foodRouter);
app.use(express.json()); // Make sure it comes back as json
app.listen(3000, () => { console.log('Server is running...') });