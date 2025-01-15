const downloads = require('../models/downloadSchema');
const recipes = require('../models/recipeSchema');

exports.addToDownload=async(req,res)=>{
    console.log("Inside add to download");
    const {id} = req.params
    const userId=req.payload
    const {name,image,cuisine}=req.body
    console.log(id,name,image,cuisine);
    
    try{
        const Recipe = await downloads.findOne({recipeId:id})
       if(Recipe){
            //if recipe existiing ? count increment by 1
            Recipe.count++
            await Recipe.save()
            res.status(200).json(Recipe)
       }
       else{
            const newRecipe = new downloads({
                recipeId:id,
                recipeName:name,
                recipeImage:image,
                recipeCuisine:cuisine,
                count:1,
                userId
            })
           await newRecipe.save()
           res.status(200).json(newRecipe)
       }
    }
    catch(err){
        res.status(404).json("Error"+err)
    }
}