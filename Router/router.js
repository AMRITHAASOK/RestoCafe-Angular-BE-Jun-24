const express = require('express')

const recipeController = require('../controllers/recipeController')
const testimonyController=require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const router = new express.Router()

//get all recipes
router.get('/getAllRecipes',recipeController.getAllRecipes)
//add Testmony
router.post('/add-Testimony',testimonyController.addTestimony)
//register
router.post('/register',userController.register)
router.post('/login',userController.login)

//view recipee
router.get('/viewRecipe/:id',jwtMiddleware,recipeController.viewRecipe)
module.exports = router