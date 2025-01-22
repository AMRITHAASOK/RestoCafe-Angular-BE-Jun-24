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

exports.deleteRecipe = async (req,res)=>{
    console.log("Inside deleteRecipeController");
    const {id}=req.params
    console.log(id);
    
    try{
        const existingRecipe = await recipes.findByIdAndDelete({_id:id})
        res.status(200).json(existingRecipe)
        console.log(existingRecipe);
          
    }catch(err){
        res.status(401).json(err)
    }
}

exports.addRecipe=async(req,res)=>{
    console.log("inside addRecipe controller");
    
    const { name,ingredients, instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image, mealType}=req.body
    
    console.log(req.body);
    

    try{
        const existingRecipe =await recipes.findOne({name})
        if(existingRecipe){
            res.status(402).json("Recipe already in your collection")
        }
        else{
            const newRecipe = new recipes({name,ingredients, instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType})
            await newRecipe.save()
            res.status(200).json(newRecipe) 
        }
       
    }
    catch(err){
        res.status(404).json(err)
    }
}

exports.updateRecipe = async (req, res) => {
    console.log("Inside UpdateRecipe controller");
    const { id } = req.params;
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType } = req.body;
    
    console.log(req.body);
    
    try {
        const updateRecipe = await recipes.findByIdAndUpdate(
            { _id: id },
            { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType },
            { new: true } // This option returns the modified document rather than the original
        );
        
        if (!updateRecipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }

        res.status(200).json(updateRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
