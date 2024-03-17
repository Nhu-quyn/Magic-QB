const express = require("express");
const user = require("../controllers/user.controller");

const router = express.Router();

// Tuyến đường "/register" - POST: Đăng ký một người dùng mới.
router.post("/register", user.registerUser);

// Tuyến đường "/login" - POST: Đăng nhập vào hệ thống.
router.post("/login", user.loginUser);

// Tuyến đường "/logout" - POST: Đăng xuất khỏi hệ thống.
router.post("/logout", user.logoutUser);

// Tuyến đường "/cart/add" - POST: Thêm sản phẩm vào giỏ hàng của người dùng.
router.post("/cart/add", user.addToCart);

// Tuyến đường "/cart/remove" - POST: Xóa sản phẩm khỏi giỏ hàng của người dùng.
router.post("/cart/remove", user.removeFromCart);

// Tuyến đường "/cart/update" - PUT: Cập nhật thông tin giỏ hàng của người dùng.
router.put("/cart/update", user.updateCart);

// Tuyến đường "/order/place" - POST: Đặt hàng các sản phẩm trong giỏ hàng.
router.post("/order/place", user.placeOrder);

// Tuyến đường "/orders" - GET: Lấy danh sách các đơn hàng của người dùng.
router.get("/orders", user.getOrderList);

// Tuyến đường "/order/:id" - GET: Lấy thông tin chi tiết về một đơn hàng cụ thể của người dùng.
router.get("/order/:id", user.getOrderDetails);

// Tuyến đường "/order/:id/cancel" - POST: Hủy đơn hàng của người dùng.
router.post("/order/:id/cancel", user.cancelOrder);

// Tuyến đường "/order/:id/confirm-received" - POST: Xác nhận rằng đơn hàng đã được nhận bởi người dùng.
router.post("/order/:id/confirm-received", user.confirmOrderReceived);

// Tuyến đường "/cart" - GET: Hiển thị giỏ hàng của người dùng.
router.get("/cart", user.viewCart);

module.exports = router;