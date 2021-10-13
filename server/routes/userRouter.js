const express = require("express");
const usercontroller= require('../controllers/users/index.js');
const router = express.Router();

// https:://muggerbar.ml/login
router.post('/login', usercontroller.login);
router.post('/logout', usercontroller.logout);
router.post('/signup', usercontroller.signup);
router.delete('/signout', usercontroller.signout);
router.get('/userinfo', usercontroller.userinfo);
router.get('/recipeUserinfo', usercontroller.recipeUserinfo);
router.patch('/edit', usercontroller.edit);

module.exports = router;
