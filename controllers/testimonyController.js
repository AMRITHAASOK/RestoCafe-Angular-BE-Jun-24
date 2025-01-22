const testimonials = require('../models/testimonySchema')
//add Testimony 
exports.addTestimony=async(req,res)=>{
    console.log("inside testimony controller");
    
    const {name,email,message}=req.body
    console.log(req.body);
    

    try{
        const testimony = new testimonials({
            name,email,message
        })
        await testimony.save()
        res.status(200).json(testimony)
    }
    catch(err){
        res.status(404).json(err)
    }
}

exports.getAllFeedbacks = async (req,res)=>{
    console.log("Inside getAllFeedbacks");
   
    try{
        const existingFeedbacks = await testimonials.find()
        res.status(200).json(existingFeedbacks)  
    }catch(err){
        res.status(401).json(err)
    }
}

exports.updateFeedback=async(req,res)=>{
    console.log("inside updateFeedback controller");
    const{id} = req.params
    const status = req.query.status
    try{
        const existingFeedbacks = await testimonials.findById({_id:id})
        if(existingFeedbacks){
            existingFeedbacks.status=status
            await existingFeedbacks.save()
            res.status(200).json(existingFeedbacks)
        }  
    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.getAllApprovedFeedBacks = async (req,res)=>{
    console.log("Inside getAllApprovedFeedbacks");
   
    try{
        const existingFeedbacks = await testimonials.find({status:"Approved"})
        res.status(200).json(existingFeedbacks)  
    }catch(err){
        res.status(401).json(err)
    }
}