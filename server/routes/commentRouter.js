const express = require("express");
const commentcontroller= require('./controllers/comments');
const router = express.Router();

router.post('/comment', commentcontroller.comment.post)
router.get('/comment', commentcontroller.comment.get)

module.exports = router;