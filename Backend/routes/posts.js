const express = require('express');
const {getPosts} = require("../controllers/postController");
const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
// const authMiddleware = require('../middleware/authMiddleware.js')
router.get('/posts', getPosts);

module.exports = router;