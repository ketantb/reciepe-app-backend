const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const REGISTER = require("../register/registerModel/registerModel")
const CREATERECIEPE = require("../reciepe/createreciepeModel/reciepeModel")

router.post("/createreciepe", async (req, res) => {
    const {title, author, url, ingredients, directions} = req.body
    const reciepeData = new CREATERECIEPE({
        ...{title, author, url, ingredients, directions}
    }) 
    try{
        console.log(title, author, url, ingredients, directions)
        res.json({message: "Reciepe Registration Successfull"})
        const createReciepeData = await reciepeData.save()
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
})

router.get("/createreciepe", async(req, res) => {
    try{
        const data = await CREATERECIEPE.find().sort({_id:-1})
        res.json(data)
    }
    catch(err){
        res.status(406).json({
            status: "Failed",
            message: err.message
        })
    }
})

module.exports  = router