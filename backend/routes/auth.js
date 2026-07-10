const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "tüm alanlar zorunludur" });
        }

        const existingUser = await pool.query(
            'SELECT * FROM app_users WHERE user_mail = $1',
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "bu mail zaten kayıtlı" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            'INSERT INTO app_users (user_fullname, user_mail, user_hashpassword) VALUES ($1, $2, $3) RETURNING user_id, user_fullname, user_mail',
            [fullName, email, hashedPassword]
        );

        res.status(201).json({
            message: "kullanıcı başarıyla kayıt oldu",
            user: newUser.rows[0]
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "sunucu hatası" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "email ve şifre zorunlu" });
        }

        const result = await pool.query(
            "SELECT * FROM app_users WHERE user_mail = $1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ message: "geçersiz email veya şifre" });
        }

        const user = result.rows[0];

        const isMatch = await bcrypt.compare(password, user.user_hashpassword);

        if (!isMatch) {
            return res.status(401).json({ message: "geçersiz email veya şifre" });
        }

        const token = jwt.sign(
            { userId: user.user_id, email: user.user_mail },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "giriş başarılı",
            token,
            user: {
                id: user.user_id,
                fullName: user.user_fullname,
                email: user.user_mail,
            },
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "sunucu hatası" });
    }
});

module.exports = router;