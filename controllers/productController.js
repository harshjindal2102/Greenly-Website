const Product = require("../models/itemModel");

const getProducts = async(req,res) => {
    const product = await Product.find({});
    res.json(product);
}

const getProduct = async(req,res) => {
    const product = await Product.findById(req.params.id);
    if(product)
   {
    res.json(product);
   }else{
     res.status(404).json({message:"No Product"})
   }
 }

 module.exports = {getProducts,getProduct}