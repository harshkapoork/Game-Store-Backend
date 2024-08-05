
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            require: true,
            default:"admin123"
        },
        dp: {
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            type: String,
            require:false,
        },
        library: {
            default: [],
            require:false
        },
        cart: {
            default: [],
            require:false
        },
        totalSpend: {
            default: 0,
            
        }
       
        
    }
);
module.exports=mongoose.model("user",userSchema)
