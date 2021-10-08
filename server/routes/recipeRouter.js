const express = require("express");
const recipecontroller= require('./controllers/recipes');
const router = express.Router();


router.post('/recipe', recipecontroller.recipe.post);
router.get('/recipe', recipecontroller.recipe.get);
router.delete('/recipe:id', recipecontroller.recipe.delete);
router.post('/recipe:id/like', recipecontroller.recipe.like);

module.exports = router;