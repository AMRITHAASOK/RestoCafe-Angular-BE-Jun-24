const express = require('express')

const recipeController = require('../controllers/recipeController')
const testimonyController=require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const router = new express.Router()

//get all recipes
router.get('/getAllRecipes',recipeController.getAllRecipes)
//add Testmony
router.post('/add-Testimony',testimonyController.addTestimony)
//register
router.post('/register',userController.register)
router.post('/login',userController.login)
module.exports = router