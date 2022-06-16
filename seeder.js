const mongoose = require("mongoose");
const express = require("express");
const Product = require("./models/itemModel");
const User = require("./models/userModel");
const users = require("./data/users");
const products = require("./products");
const dbconnect  = require('./database/conn');

dbconnect;

const importData = async() => {
try{
    await Product.deleteMany();
    // await User.deleteMany();
    // const createUser =await User.insertMany(users);
    // const adminUser = createUser[0]._id;
    // console.log(adminUser);
    const sampleData = products.map((product) => {
       return {...product}
    })
    await Product.insertMany(sampleData);
    console.log("DATA IMPORTED");


}catch(err){
    console.log(err);
} 
}

const dataDestroy = async() => {
try{
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Destroyed")
}catch(err){
    console.log(err);
} 
}

if(process.argv[2] == "-d"){
 dataDestroy();
}else{
  importData();
}