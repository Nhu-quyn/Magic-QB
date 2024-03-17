const express = require("express");
const category = require("../controllers/category.controller");

const router = express.Router();

// Tạo danh mục sản phẩm mới
router.post("/create-category", category.createCategory);

// Lấy danh sách tất cả danh mục sản phẩm
router.get("/get-all-categories", category.getAllCategories);

// Cập nhật thông tin của danh mục sản phẩm dựa trên ID
router.put("/update-category/:id", category.updateCategory);

// Xóa danh mục sản phẩm dựa trên ID
router.delete("/delete-category/:id", category.deleteCategory);

module.exports = router;