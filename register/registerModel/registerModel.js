const mongoose = require("mongoose")

const Schema = mongoose.Schema

const registerSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    repeatPassword: {type: String, required: true},
})

const REGISTER = mongoose.model('register', registerSchema)
module.exports = REGISTER