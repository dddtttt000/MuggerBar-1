const express = require("express");
const recipecontroller= require('../controllers/recipes/recipe');
const router = express.Router();


router.post('/', recipecontroller.post);
router.get('/', recipecontroller.get);
router.delete('/recipe:id', recipecontroller.delete);
router.post('/recipe:id/like', recipecontroller.like);

module.exports = router;