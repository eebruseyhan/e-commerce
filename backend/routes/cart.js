const express = require('express');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

//sepete ürün ekleme token kontrolü
router.post('/add', authenticateToken, (req, res) => {
    const { product } = req.body;

    if (!product) {
        return res.status(400).json({ message: "Ürün bilgisi gerekli" });
    }

    res.json({
        message: "Sepete eklendi",
        userId: req.user.userId,
        product,
    });
});

module.exports = router;
