const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler (async(req,res,next) => {
  let token;
  console.log(req.headers.authorization);
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
  try{
      token = req.headers.authorization.split(' ')[1]
      const decode = jwt.verify(token,process.env.SECRET_KEY)
      console.log(decode); 
      req.user = await User.findById(decode._id).select("-password -rpassword") 
      console.log(req.user);
      next();
  }catch(err){
    console.log(err);
  }
}
  if(!token){
    res.status(422);
    throw new Error("Not Authorzed")
  }
  

});

module.exports = protect;