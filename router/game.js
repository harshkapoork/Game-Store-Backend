const express = require('express')
const router = express.Router();
const Games = require("../model/games")
const mongoose=require('mongoose')

const app = express()

app.use(express.json())


//get all Games
router.get("/", async(req, res) => {

    try {
        const Allgames =  await Games.find()
        res.json(Allgames)
        
    } catch (error) {
        res.json("No game Found")
        
    }
  
})
//end



//get one Game
router.post("/one",  async(req, res) => {
    const data = req.query.id
 
  
    try {
        const game = await Games.findById(data)
      
        res.json(game)
        
    } catch (error) {
        res.json({message:"not"})
        
    }
    
})

//end



//add new games
router.post("/", async (req, res) => {
    const data = req.body
    const gameData = {
        title: data.title,
        des: data.des,
      
        price: data.price,
        catagory: data.catagory,
        Franchise: data.Franchise,
        language:data.language,
        
    }
    const newGame = new Games(gameData)
    // try {
        await newGame.save()
        res.json("game added")
        
    // } catch (error) {
    //     res.json("game not added",error.message)
        
    // }
 
   
})

module.exports=router