const mongoose = require('mongoose')
const gameSchmea = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    des: {
        type: String,
        required: true,
        default:"no description"
    
    },
    

    // imageURL: {
    //     type: Object,
    //     required: true,
    //      default:[""]
    // },
    // videoURL: {
    //     type:Object,
    //     required: true,
    //     default:[""] 
    // },
    Franchise: {
        type:String,
        require:false
    },
    price: {
        type:Number,
        default: "free",
        require:true
    },
    catagory: {
        type:String,
        require:true
    },
    Pc_Requirement: {
     type:Object,
        min: {
            default: {
                title: "Requires a 64-bit processor and operating system",
                OS: "Windows 10 64-bit",
                Processor: " Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
                Memory: "8 GB RAM",
                Graphics: "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
                DirectX: " Version 11",
                Storage: "70 GB available space",
                Additional_Notes: "DirectX feature level 11_1 required"

            }
            },

        Recommended: {
            default: {
                title: "Requires a 64-bit processor and operating system",
                OS: "Windows 10 64-bit",
                Processor: " Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
                Memory: "8 GB RAM",
                Graphics: " NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)",
                DirectX: " Version 11",
                Storage: "70 GB available space",
                Additional_Notes: "DirectX feature level 11_1 required"
                
            }
        }
    },
    language: {
        type: Object,
        default:["english"]
        
    }
},
  


{
    timestamps:true
});

module.exports = mongoose.model("games", gameSchmea);
