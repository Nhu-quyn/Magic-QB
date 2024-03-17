// Import các module cần thiết
const Product = require('../models/Product');

// Controller cho quản lý sản phẩm
// exports.createProduct = async (req, res) => {
//     try {
//         // Lấy dữ liệu từ request body
//         const { name, price, category } = req.body;

//         // Tạo mới sản phẩm
//         const newProduct = new Product({ name, price, category });

//         // Lưu sản phẩm vào cơ sở dữ liệu
//         await newProduct.save();

//         // Trả về thông tin sản phẩm đã được tạo
//         res.status(201).json({ message: "Product created successfully", product: newProduct });
//     } catch (error) {
//         // Xử lý lỗi nếu có
//         console.error("Error creating product:", error);
//         res.status(500).json({ message: "Error creating product" });
//     }
// };
// Tạo sản phẩm mới
exports.createProduct = async (req, res) => {
    try {
        const { name, price, category, image } = req.body;
        const product = new Product({ name, price, category, image });
        await product.save();
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Failed to create product", error: error.message });
    }
};

// Cập nhật thông tin của sản phẩm dựa trên ID
exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;
        const options = { new: true };
        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, options);
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Failed to update product", error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        // Lấy tất cả sản phẩm từ cơ sở dữ liệu
        const products = await Product.find();

        // Trả về danh sách sản phẩm
        res.json(products);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Error fetching products" });
    }
};

exports.getProductById = async (req, res) => {
    try {
        // Lấy ID sản phẩm từ request params
        const productId = req.params.id;

        // Tìm sản phẩm trong cơ sở dữ liệu dựa trên ID
        const product = await Product.findById(productId);

        // Kiểm tra xem sản phẩm có tồn tại không
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Trả về thông tin chi tiết của sản phẩm
        res.json(product);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Error fetching product" });
    }
};

// exports.updateProduct = async (req, res) => {
//     try {
//         // Lấy ID sản phẩm từ request params
//         const productId = req.params.id;

//         // Lấy dữ liệu cập nhật từ request body
//         const { name, price, category } = req.body;

//         // Tìm và cập nhật sản phẩm trong cơ sở dữ liệu dựa trên ID
//         const updatedProduct = await Product.findByIdAndUpdate(productId, { name, price, category }, { new: true });

//         // Kiểm tra xem sản phẩm có tồn tại không
//         if (!updatedProduct) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Trả về thông tin sản phẩm đã được cập nhật
//         res.json({ message: "Product updated successfully", product: updatedProduct });
//     } catch (error) {
//         // Xử lý lỗi nếu có
//         console.error("Error updating product:", error);
//         res.status(500).json({ message: "Error updating product" });
//     }
// };

exports.deleteProduct = async (req, res) => {
    try {
        // Lấy ID sản phẩm từ request params
        const productId = req.params.id;

        // Xóa sản phẩm từ cơ sở dữ liệu dựa trên ID
        await Product.findByIdAndDelete(productId);

        // Trả về thông báo xác nhận xóa sản phẩm thành công
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Error deleting product" });
    }
};