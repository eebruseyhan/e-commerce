const jwt = require('jsonwebtoken');

//token kontrolü
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "token bulunamadı " });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "geçersiz token" });
        }
        req.user = decoded;
        next();
    });
}

module.exports = authenticateToken;