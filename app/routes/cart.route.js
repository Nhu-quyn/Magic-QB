const express = require("express");
const cart = require("../controllers/cart.controller");

const router = express.Router();

// Tuyến đường "/add-to-cart" - POST: Thêm sản phẩm vào giỏ hàng.
router.post("/add-to-cart", cart.addToCart);

// Tuyến đường "/remove-from-cart" - POST: Xóa sản phẩm khỏi giỏ hàng.
router.post("/remove-from-cart", cart.removeFromCart);

// Tuyến đường "/update-cart" - PUT: Cập nhật thông tin giỏ hàng.
router.put("/update-cart", cart.updateCart);

// Tuyến đường "/view-cart" - GET: Hiển thị giỏ hàng của người dùng.
router.get("/view-cart", cart.viewCart);

// Tuyến đường "/checkout-cart" - POST: Thanh toán giỏ hàng.
router.post("/checkout-cart", cart.checkoutCart);

module.exports = router;