const mongoose = require('mongoose');

// Định nghĩa schema cho mô hình Product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    // Các trường khác của sản phẩm (nếu có)
});

// Tạo mô hình Product từ schema đã định nghĩa
const Product = mongoose.model('Product', productSchema);

module.exports = Product;