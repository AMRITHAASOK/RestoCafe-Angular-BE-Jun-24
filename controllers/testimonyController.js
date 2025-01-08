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