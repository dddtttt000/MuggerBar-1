const express = require('express');
const router = express.Router();

const controllersUser = require('../controllers/user.js')

// total 들어오는 경로
//'/user/login' , '/user/logout', '/user/signup', '/user/info'

//'/user/login'
router.post('/login', controllersUser.login)


//'/user/logout'
router.post('/logout', controllersUser.logout)


//'/user/signup'
router.post('/signup', controllersUser.signup)


//'/user/info'
router.post('/info', controllersUser.info)
