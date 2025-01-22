const users=require('../models/userSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//add usser
exports.register=async(req,res)=>{
    console.log("inside reg controller");
    const{username ,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already existing..")
        }
        else{

            const encryptedPassword = await bcrypt.hash(password,10)
            console.log(encryptedPassword);
            

            const newUser = new users({
                username,email,password:encryptedPassword
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
    
}
exports.login=async(req,res)=>{
    console.log("inside login controller");
    const{email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            let isUserPswd=await bcrypt.compare(password,existingUser.password)
            if(isUserPswd || password==existingUser.password){
                  //jwt token
                  const token = jwt.sign({userId:existingUser._id},process.env.jwtPassword)
                  res.status(200).json({user:existingUser,token})
            }
           
                else{
                    res.status(401).json("incorrect password")
                }
            }

        else{
            res.status(200).json("Invalid user")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.updateUser=async(req,res)=>{
    console.log("inside update controller");
    const{profilePic} = req.body
    const userId = req.payload
    try{
        const existingUser = await users.findById({_id:userId})
        if(existingUser){
            existingUser.profilePic=profilePic
            await existingUser.save()
            res.status(200).json(existingUser)
        }  
    }
    catch(err){
        res.status(401).json(err)
    }
    
}


exports.getAllUsers = async (req,res)=>{
    console.log("Inside  get userss");
    try{
        const allUsers = await users.find({role:"User"})
        res.status(200).json(allUsers)
    }
    catch(err){
        res.status(404).json("Error"+err)
    }
    
}
