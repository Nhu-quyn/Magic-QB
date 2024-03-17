const express = require("express");
const order = require("../controllers/order.controller");

const router = express.Router();

// Tuyến đường "/create-order" - POST: Tạo đơn hàng mới.
router.post("/create-order", order.createOrder);

// Tuyến đường "/get-order/:id" - GET: Lấy thông tin chi tiết của một đơn hàng dựa trên ID.
router.get("/get-order/:id", order.getOrder);

// Tuyến đường "/get-all-orders" - GET: Lấy tất cả các đơn hàng.
router.get("/get-all-orders", order.getAllOrders);

// Tuyến đường "/update-order/:id" - PUT: Cập nhật thông tin của một đơn hàng dựa trên ID.
router.put("/update-order/:id", order.updateOrder);

// Tuyến đường "/delete-order/:id" - DELETE: Xóa một đơn hàng dựa trên ID.
router.delete("/delete-order/:id", order.deleteOrder);

module.exports = router;