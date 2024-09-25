const Usermodel=require("../models/Usermodel");
const bcrypt=require("bcryptjs");

exports.signup=async(req,res)=>{

    try{
        const{User,Email,password}=req.body;
        const exituser=await Usermodel.findOne({Email});

        if(exituser){
            return res.status(400).json({
                success:false,
                message:"user already exit",
            })
        }

        let hashpassword;

        try{
            hashpassword=await bcrypt.hash(password,10);
        }
        catch(err){
            res.status(400).json({
                success:false,
                message:"password not hashed"
            })
        };

        const response=await Usermodel.create({User,Email,password:hashpassword})
        res.status(200).json({
            success:true,
            data:response,
            message:"data inserted successfully",
        })
    }catch(err){
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.login=async(req,res)=>{

    try{
        const {Email,password}=req.body;
       
        if(!Email || !password){
            return res.status(400).json({
                success:false,
                message:"fill all the details",
            })
        }

        const User=await Usermodel.findOne({Email});
       
        if(!User){
            return res.status(400).json({
                success:false,
                message:"you need to sign up first",
            })
        }

        if(await bcrypt.compare(password,User.password)){
            res.status(200).json({
                success:true,
                User,
                message:"Login Successfully"
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:"password incorrect",
            })
        }

    }
    catch(err){
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        });
    }
}