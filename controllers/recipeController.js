const recipes = require('../models/recipeSchema')

exports.getAllRecipes = async (req,res)=>{
    console.log("Inside  get recipes");
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }
    catch(err){
        res.status(404).json("Error"+err)
    }
    
}
exports.viewRecipe =async(req,res)=>{
    console.log("Inside  view recipes");
    const {id} = req.params
    try{
        const Recipe = await recipes.findById({_id:id})
        res.status(200).json(Recipe)
    }
    catch(err){
        res.status(404).json("Error"+err)
    }
}

exports.relatedRecipe =async(req,res)=>{
    console.log("Inside  related recipes");
    const cuisine = req.query.cuisine
    try{
        const Recipe = await recipes.find({cuisine})
        res.status(200).json(Recipe)
    }
    catch(err){
        res.status(404).json("Error"+err)
    }
}