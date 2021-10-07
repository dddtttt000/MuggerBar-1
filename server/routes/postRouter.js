const controllersPostMake = require("../controllers/postMake.js");
const controllersPostGet = require("../controllers/postGet.js");
const controllersPostDelete = require("../controllers/postDelete.js");

// total 들어오는 거
//'/post/make/content', '/post/get/content', '/post/delete/content'
//'/post/make/comment', '/post/get/comment'

// '/post/make/content'
router.post("/make/content", controllersPostMake.content);

// '/post/make/comment'
router.post("/make/comment", controllersPostMake.comment);

// '/post/get/content'
router.post("/get/content", controllersPostGet.content);

// '/post/get/comment'
router.post("/get/content", controllersPostGet.content);

// '/post/delete/content'
router.post("/get/content", controllersPostDelete.content);