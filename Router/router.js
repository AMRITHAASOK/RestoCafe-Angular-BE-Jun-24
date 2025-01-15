const express = require('express')

const recipeController = require('../controllers/recipeController')
const testimonyController=require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const downloadController = require('../controllers/downloadController')
const savedController = require('../controllers/savedController')
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
//view related recipe
router.get('/relatedRecipe',jwtMiddleware,recipeController.relatedRecipe)

router.post('/addToDownloadRecipe/:id',jwtMiddleware,downloadController.addToDownload)

router.post('/savedRecipe/:id',jwtMiddleware,savedController.addToSaveRecipe)

router.get('/getSavedRecipe',jwtMiddleware,savedController.getSaveRecipe)

router.delete('/deleteSavedRecipe/:id',jwtMiddleware,savedController.deleteSaveRecipe)

router.post('/user/edit',jwtMiddleware,userController.updateUser)

module.exports = router