const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const { addToCart } = require('../controller/cartController');

const router = express.Router();

router.post('/add', authenticateToken, addToCart);

module.exports = router;
