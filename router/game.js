const express = require('express')
const router = express.Router();
const Games = require("../model/games")
const mongoose=require('mongoose')

const app = express()

app.use(express.json())


//get all Games
router.get("/", async(req, res) => {

    try {
        const GamesData =  await Games.find()
        res.json({ status: true ,GamesData } )
        
    } catch (error) {
        res.json({
            status: false,
            message:"server not responding",
            error: error.message,
            
            
        })
        
    }
  
})
//end



//get one Game
router.post("/one",  async(req, res) => {
    const data = req.query.id
 
  
    try {
        const GamesData = await Games.findById(data)
       
        res.json({ status: true ,GamesData } )
        
    } catch (error) {
        res.json({
            status: false,
            message:"server not responding",
            error: error.message,
            
            
        })
        
    }
    
})

//end

// filters start
// get game by language
router.post("/language", async (req, res) => {
    try{
    const value = req.query.language
    const filter = { language:{ $regex:value, $options: 'i' } }
    const GamesData = await Games.find(filter)
    res.json({ status: true ,GamesData } )
        
} catch (error) {
    res.json({
        status: false,
        message:"server not responding",
        error: error.message,
        
        
    })
    
}
})

// end
// get game by Title
router.post("/title", async (req, res) => {
    try{
      const value = req.body.title || null;
    const i = req.body.i || 0;
    const filter = { title:{ $regex:`^${value}`, $options: 'i' } }
    const GamesData = await Games.find(filter).limit(i)
    res.json({ status: true ,GamesData } )
        
} catch (error) {
    res.json({
        status: false,
        message:"server not responding",
        error: error.message,
        
        
    })
    
}
})

// end
router.post("/test", async(req, res) => {
    
    const value = req.body.cartData || ["66afc18552c6a3dbcea69a00"];
    console.log(req.body)
    const i = req.body.i || 0;
    // const filter = { _id: {$in: ["66, "66afc18552c6a3dbcea69a00"]} }
    const game = await Games.find({_id:value}).limit(i)
    res.json(game)
})





// get game by catagory
router.post("/catagory", async (req, res) => {
    try{
    const value = req.body.title || "";
    const i = req.body.i || 0;
    const filter = { catagory:{ $regex:`^${value}`, $options: 'i' } }
    const GamesData = await Games.find(filter).limit(i)
    res.json({ status: true ,GamesData } )
        
} catch (error) {
    res.json({
        status: false,
        message:"server not responding",
        error: error.message,
        
        
    })
    
}

})


// end

// filters end


//add new games
router.post("/", async (req, res) => {
    const data = req.body
    const gameData = {
        title: data.title,
        des: data.des,
        dp: data.dp,
        img1: data.img1,
        img2: data.img2,
        img3:data.img3,
        img4: data.img4,
        img5: data.img5,
        video1: data.video1,
        video2:data.video2,
        price: data.price,
        catagory: data.catagory,
        developer: data.developer,
        language: data.language,
        releaseDate:data.releaseDate
        
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
