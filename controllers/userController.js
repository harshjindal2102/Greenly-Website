const User = require("../models/userModel");
 
const getUser = async(req,res) => {
    // const user =  User.find({});
    console.log(req.body);
    // res.json(user);
    res.status(200).send(req.body);
} 

module.exports = getUser;