const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors")
const dotenv = require("dotenv")


// middleware
dotenv.config();
app.use(cors());
app.use(express.json())


// database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_STRING, )
    .then(() => {
    console.log("Db connection Started")
})
    .catch((error) => {
        console.error("No internet ::"+error.message);
    })

// routes
const game = require("./router/game")
app.use("/game", game)
//

// router user
const user = require('./router/user')
app.use("/user",user)




app.listen(port, () => {
        console.log(`server started at ${port}`)
})
    
app.get("/", (req,res) => {
    res.json("Game home")
})


