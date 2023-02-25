const mongoose = require("mongoose")

const key = "mongodb+srv://ketan:ketan@cluster0.0mtvovz.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', true)
mongoose.connect(key)
mongoose.connection.on("connected", () => console.log("MongoDB connection successfull"))
mongoose.connection.on("error", () => console.log("MongoDB connection error"))