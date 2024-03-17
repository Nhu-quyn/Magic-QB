// const express = require("express"); // import express
// const cors = require("cors"); 


// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/",(req, res) =>{
//     res.json({message: "Welcome to Magic Beauty."});
// });

// module.exports = app;
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const userRoutes = require("./app/routes/user.route");
const adminRoutes = require("./app/routes/admin.route");
const productRoutes = require("./app/routes/product.route");
const categoryRoutes = require("./app/routes/category.route");
const orderRoutes = require("./app/routes/order.route");
const cartRoutes = require("./app/routes/cart.route");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Magic Beauty." });
});


app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);


// Xử lý lỗi 404 - Route không được tìm thấy
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Xử lý lỗi 500 - Lỗi máy chủ
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});


module.exports = app;