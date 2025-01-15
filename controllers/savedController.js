const saveRecipes = require('../models/savedSchema')

exports.addToSaveRecipe = async (req,res)=>{
    console.log("Inside addToSaveRecipeController");
    const {id} = req.params
    const userId = req.payload
    const {name,image} = req.body
    try{
        const existingRecipe = await saveRecipes.findOne({recipeId:id,userId})
        if(existingRecipe){
            res.status(406).json("Selected Recipe already in your Collection.. Please add Another!!!")
        }else{
            const newRecipe = new saveRecipes({
                recipeId:id,
                name,
                image,
                userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getSaveRecipe = async (req,res)=>{
    console.log("Inside getSaveRecipeController");
    const userId = req.payload
    try{
        const existingRecipe = await saveRecipes.find({userId})
        res.status(200).json(existingRecipe)  
    }catch(err){
        res.status(401).json(err)
    }
}

exports.deleteSaveRecipe = async (req,res)=>{
    console.log("Inside deleteSaveRecipeController");
    const {id}=req.params
    try{
        const existingRecipe = await saveRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(existingRecipe)  
    }catch(err){
        res.status(401).json(err)
    }
}
