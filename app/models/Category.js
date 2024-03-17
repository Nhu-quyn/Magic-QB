const mongoose = require('mongoose');

// Định nghĩa schema cho mô hình Category
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // Các trường khác của danh mục sản phẩm (nếu có)
});

// Tạo mô hình Category từ schema đã định nghĩa
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;