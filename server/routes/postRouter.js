const express = require("express");
const makecontroller= require('./controllers/make')
const getcontroller= require('./controllers/get')
const deletecontroller= require('./controllers/delete')
const router = express.Router();


router.post('/make/content', makecontroller.content);
router.post('/get/content', getcontroller.content);
router.get('/delete/content', deletecontroller.content);
router.get('/make/comment', makecontroller.comment);
router.delete('/get/comment', getcontroller.comment);
