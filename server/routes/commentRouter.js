const express = require("express");
const commentcontroller= require('../controllers/comments/comment');
const router = express.Router();

router.post('/comment', commentcontroller.post)
router.get('/comment', commentcontroller.get)

module.exports = router;