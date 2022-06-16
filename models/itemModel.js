const mongoose = require("mongoose");
const User = require("./userModel");

const productSchema = new mongoose.Schema({
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:"User"
    // },
    name : {
        type:String,
        required:true 
    },
    image :{
        type:String,
        required:true 
    },
    actualprice : {
        type:Number,
        required:true 
    },
    discountprice:{
        type:Number,
        required:true 
    },
    rating : {
        type:Number,
        required:true 
    }

})

const Product  = new mongoose.model("Product",productSchema);

module.exports = Product;
