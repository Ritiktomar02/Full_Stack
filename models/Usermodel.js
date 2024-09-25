const mongoose=require("mongoose");

const Usermodel=new mongoose.Schema({

    User:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    
})

module.exports=mongoose.model("Usermodel",Usermodel)