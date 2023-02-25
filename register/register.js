const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const REGISTER = require("./registerModel/registerModel")

router.post("/register", async (req, res) => {
    const {name, email, password, repeatPassword, termsNconditions} = req.body
    if(!name || !email || !password || !repeatPassword){
        console.log("all the fields are mandatory")
        return res.status(422).send("all the fields are mandatory")
    }
    else if(await REGISTER.findOne({email})){
        console.log("email already in use")
        return res.status(400).send("email already in use")
    }
    else if(password != repeatPassword){
        console.log("passwords do NOT match")
        return res.status(400).send("passwords do NOT match")
    }
    else if(!termsNconditions){
        console.log("You must agree all the TERMS & CONDITIONS")
        return res.status(400).send("You must agree all the TERMS & CONDITIONS")
    }
    const registerUser = new REGISTER({
        ...{name, email, password, repeatPassword}
    }) 
    try{
        console.log(name, email, password, repeatPassword)
        res.json({message: "User Registration Successfull"})
        const registerData = await registerUser.save()
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
})

module.exports  = router