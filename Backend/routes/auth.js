const express = require('express');
const { signup } = require('../controllers/authcontrollers');
const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', signup);

module.exports = router;
