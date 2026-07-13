// sepete ürün ekleme
const addToCart = (req, res) => {
    const { product } = req.body;

    if (!product) {
        return res.status(400).json({ message: "Ürün bilgisi gerekli" });
    }

    res.json({
        message: "Sepete eklendi",
        userId: req.user.userId,
        product,
    });
};

module.exports = { addToCart };
