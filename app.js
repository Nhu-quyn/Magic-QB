const express = require("express"); // import express
const cors = require("cors"); 

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req, res) =>{
    res.json({message: "Welcome to Magic Beauty."});
});

module.exports = app;