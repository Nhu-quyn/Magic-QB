const Category = require('../models/Category');

// Tạo danh mục sản phẩm mới
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = new Category({ name });
        await category.save();
        res.status(201).json({ message: "Category created successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Failed to create category", error: error.message });
    }
};

// Lấy danh sách tất cả danh mục sản phẩm
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ message: "All categories", categories });
    } catch (error) {
        res.status(500).json({ message: "Failed to get categories", error: error.message });
    }
};

// Cập nhật thông tin của danh mục sản phẩm dựa trên ID
exports.updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const updates = req.body;
        const options = { new: true };
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updates, options);
        res.status(200).json({ message: "Category updated successfully", category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: "Failed to update category", error: error.message });
    }
};

// Xóa danh mục sản phẩm dựa trên ID
exports.deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete category", error: error.message });
    }
};
