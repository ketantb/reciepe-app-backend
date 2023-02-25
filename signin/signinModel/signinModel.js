const mongoose = require("mongoose")

const Schema = mongoose.Schema

const signInSchema = new Schema({
    Email: {type: String, required: true},
    Password: {type: String, required: true}
})

const SIGNIN = mongoose.model('signin', signInSchema)
module.exports = SIGNIN