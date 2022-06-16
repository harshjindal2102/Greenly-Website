const express = require("express");
const { getProducts, getProduct } = require("../controllers/productController");

const router = express.Router();
const Product = require("../models/itemModel");

router.route("/products").get(getProducts);

router.route("/products/:id").get(getProduct);

// router.get("/store",async(req,res) => {
    
// })

// router.post("/signup",async(req,res) => {
//     res.send("hello")
//     const { name , email, phone, password , rpassword} = req.body;
//     // console.log(name);
//     // console.log(phone);
//     console.log(req.body);
// })
// router.post('/signup', function (req, res) {
//     console.log(req.body);
//     res.status(200).send(req.body);
//   });

module.exports = router;