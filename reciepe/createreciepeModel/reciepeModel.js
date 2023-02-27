const mongoose = require("mongoose")

const Schema = mongoose.Schema

const createReciepeSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    url: {type: String, required: true},
    ingredients: {type: String, required: true},
    directions: {type: String, required: true}
})

const CREATERECIEPE = mongoose.model('createreciepe', createReciepeSchema)
module.exports = CREATERECIEPE;