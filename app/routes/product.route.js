const express = require("express");
const product = require("../controllers/product.controller");

const router = express.Router();

// Tuyến đường "/create-product" - POST: Tạo sản phẩm mới.
router.post("/create-product", product.createProduct);

// Tuyến đường "/update-product/:id" - PUT: Cập nhật thông tin sản phẩm dựa trên ID.
router.put("/update-product/:id", product.updateProduct);

// Tuyến đường "/get-all-products" - GET: Lấy tất cả sản phẩm.
router.get("/get-all-products", product.getAllProducts);

// Tuyến đường "/get-product/:id" - GET: Lấy thông tin chi tiết của một sản phẩm dựa trên ID.
router.get("/get-product/:id", product.getProductById);

// Tuyến đường "/delete-product/:id" - DELETE: Xóa một sản phẩm dựa trên ID.
router.delete("/delete-product/:id", product.deleteProduct);

module.exports = router;