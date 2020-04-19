const express = require('express');
const mongoose = require('mongoose');
//const foodRouter = require('./routes/foodRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json
mongoose.connect('mongodb+srv://pos:k1Y6gLecg7h5YR2A@cluster0-mtjby.gcp.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true});


const CustomerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  lastname:{
    type:String
  }
});
const customerModel = mongoose.model("Customer", CustomerSchema);
const customer=new customerModel({name:"somkheart",lastname:"kraisin55"})
app.get("/addCustomer",async function(req,res){
  await customer.save();
  res.send(customer);
  console.log(customer)
  mongoose.connection.close()

});
//app.use(foodRouter);
app.use(express.json()); // Make sure it comes back as json
app.listen(3000, () => { console.log('Server is running...') });