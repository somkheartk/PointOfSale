const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const path = require('path');
const appconfig= require('./configs/app')
const customerRoute= require('./routes/customer.routes')
const productRoute= require('./routes/product.routes')

const app = express();
app.use(bodyParser.json());
app.use(express.json()); // Make sure it comes back as json

// Api Mapping
app.use(`/api/customer`,customerRoute)
app.use(`/api/product`,productRoute)


mongoose.connect('mongodb+srv://pos:k1Y6gLecg7h5YR2A@cluster0-mtjby.gcp.mongodb.net/pos?retryWrites=true&w=majority',{useNewUrlParser:true});
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 


app.listen(3000, () => { console.log(`Server is running on 3000 `) });