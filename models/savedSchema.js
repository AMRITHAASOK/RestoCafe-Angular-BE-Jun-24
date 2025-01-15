const mongoose = require('mongoose')

const savedSchema = new mongoose.Schema({
   recipeId:{
    type:String,
    required:true
   },
   name:{
        type:String,
    required:true
    },
    image:{
        type:String,
    required:true 
    },
    userId:{
        type:String,
       required:true
    }
   
})

const saveRecipes = mongoose.model('saveRecipes',savedSchema)
module.exports =saveRecipes 


