const express = require("express");
const usercontroller= require('./controllers/user')
const router = express.Router();


router.post('/login', usercontroller.login);
router.post('/logout', usercontroller.logout);
router.post('/singup', usercontroller.signup);
router.get('/info', usercontroller.info);
