const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const SIGNIN = require("./signinModel/signinModel")
const REGISTER = require("../register/registerModel/registerModel")

router.post("/signin", async(req, res) => {
    const {email, password} = req.body
    try{
        const userEmail = await REGISTER.findOne({Email: email})
        if(!email){
            console.log("user doesn't exist, please REGISTER")
            return res.status(422).send("user doesn't exist, please REGISTER")
        }
        else if(email != userEmail.email){
            console.log(userEmail.email)
            console.log("user doesn't exist, please REGISTER")
            return res.status(422).send("user doesn't exist, please REGISTER")
        }
        else if (password != userEmail.password) {
            console.log("Invalid Password")
            return res.status(422).send("Invalid Password")
        }
        return res.status(200).json({message: "Login Successfull"})
    }
    catch(err){
        console.log(err)
    }
})

module.exports  = router