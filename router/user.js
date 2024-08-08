const express = require('express')
const router = express.Router();
const User = require("../model/games") //change it
const UserData = require('../model/user')

const mongoose=require('mongoose');
const { library } = require('@fortawesome/fontawesome-svg-core');

const app = express()

app.use(express.json())

//
router.get("/", async (req, res) => {
    console.log("get")
    res.json({
        name:"harsh kapoor",
        cart:["123","1222","322"
            
        ],
        dp:"https://www.pexels.com/photo/man-in-black-jacket-771742/",
        library:["123","1222","322"
            
        ],

    })
    
})


// cart
router.post("/cart", async (req, res) => {
    const value = req.body.title || "";
    const i = req.body.i || 2;
    const filter = { title:{ $regex:`^${value}`, $options: 'i' } }
    const cart = await User.find(filter).limit(i)
    res.json(cart)
    
})
module.exports=router
