const mongoose = require('mongoose')

const tesitmonySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    }


})

const testimonials = mongoose.model('testimonials',tesitmonySchema)
module.exports =testimonials


