const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  customer_id: String,
  customer_name: String,
  customer_address: String,
  customer_password : String
})

const CustomerModel = mongoose.model('Customer', customerSchema)
module.exports = CustomerModel