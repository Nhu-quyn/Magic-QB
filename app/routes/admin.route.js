const express = require("express");
const admin = require("../controllers/admin.controller");

const router = express.Router();

// Tuyến đường "/login" - POST: Đăng nhập vào hệ thống dành cho admin.
router.post("/login", admin.adminLogin);

// Tuyến đường "/logout" - POST: Đăng xuất khỏi hệ thống dành cho admin.
router.post("/logout", admin.adminLogout);

// Tuyến đường "/orders/process" - POST: Xử lý đơn đặt hàng.
router.post("/orders/process", admin.processOrder);

// Tuyến đường "/products/search" - POST: Tìm kiếm sản phẩm.
router.post("/products/search", admin.searchProduct);

// Tuyến đường "/categories/manage" - POST: Quản lý danh mục sản phẩm.
router.post("/categories/manage", admin.manageCategories);

// Tuyến đường "/products/manage" - POST: Quản lý sản phẩm.
router.post("/products/manage", admin.manageProducts);

// Tuyến đường "/customers/manage" - POST: Quản lý thông tin khách hàng.
router.post("/customers/manage", admin.manageCustomers);

module.exports = router;