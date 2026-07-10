const express = require('express');
const pool = require('../db');

const router = express.Router();

// ürünleri listele
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "sunucu hatası" });
    }
});

module.exports = router;