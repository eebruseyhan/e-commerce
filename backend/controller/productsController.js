const pool = require('../db');

// ürünleri listele
const getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "sunucu hatası" });
    }
};

module.exports = { getProducts };
