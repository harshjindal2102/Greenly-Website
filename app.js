const express = require("express");
const mongoose = require("mongoose");
const products = require("./products");
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
require("./database/conn");
const app= express();
app.use(express.json());

dotenv.config({path:"./config.env"})

app.get('/' ,(req,res) => {
    res.send("Hello world from the server");

})
app.use(require("./routes/productsRoute"));
app.use(require("./routes/userRoute"))

app.use("/api",productsRoute);
app.use("",userRoute);
// app.get("/products", (req,res) => {
//     res.json(products);
// })

// app.get("/products/:id" ,(req,res) => {
//     const product = products.find((p) => p.id === req.params.id)
//     res.json(product);
// })

// app.get("/about",(req,res) => {
//     res.send("Hello about");
// })

const PORT = process.env.PORT || 8000;


// app.get("/login",(req,res) => {
//       res.send("Hello login page");
//   })
//   app.get("/signup",(req,res) => {
//     res.send("Hello signup page");
// })
// app.post('/signup', function (req, res) {
//   console.log(req.body);
//   res.status(200).send(req.body);
// });

if ( process.env.NODE_ENV == "production"){
  app.use(express.static("frontend/build"));
}

app.listen(PORT,() => {
  console.log("server is running at 8000");
})

module.exports = app;