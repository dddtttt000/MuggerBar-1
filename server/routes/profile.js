const express = require("express");
const profilecontroller= require('./controllers/profile')
const router = express.Router();

router.post('/get/content-list', profilecontroller.list)
router.put('/edit', profilecontroller.edit)
router.post('/get/delete', profilecontroller.delete)