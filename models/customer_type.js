const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerTypeSchema = new Schema({
  type_id: int,
  type_name : String
})

const CustomerTypeModel = mongoose.model('CustomerType', customerTypeSchema)
module.exports = CustomerTypeModel