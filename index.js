const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 8080;
app.use(express.json())
app.use(cors())

require("./connectionDB")

require("./register/registerModel/registerModel")
require("./signin/signinModel/signinModel")
app.use(require("./register/register"))
app.use(require("./signin/signin"))

app.get('/', (req, res) => {
    res.send("Welcome to reciepe App Backend")
})

app.listen(PORT, () => {
    console.log(`App listening to port no: ${PORT}`)
})