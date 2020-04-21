const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    employee_id: String,
    employee_name: String,
    employee_address: String,
    employee_password : String
})

const employeeModel = mongoose.model('Employee', employeeSchema)
module.exports = employeeModel