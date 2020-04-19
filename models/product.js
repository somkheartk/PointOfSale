const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  product_code : String,
  product_name : String,
  product_picture : String
})

const ProductModel = mongoose.model('Product', ProductSchema)
module.exports = ProductModel