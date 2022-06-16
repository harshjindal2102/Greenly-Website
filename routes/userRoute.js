const express = require("express");
const { getUser } = require("../controllers/userController");
const bcrypt = require("bcryptjs");
const protect = require("../middleware/authenticate");
const router = express.Router();
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
//const transporter = require("../middleware/sendmail");

// router.route("/signup").post(
//     getUser
// );

router.post("/signup",async(req,res) => {
     console.log(req.body);
    // res.status(200).send(req.body);

    const { name , email, phone, password , rpassword} = req.body;
    console.log(email);
    if( !name  || !email || !phone || !password  || !rpassword ){
        return res.status(422).json({error : "Fill all The fields"});
    }
     
    try{
      const userExist = await User.findOne({email : email})
      if(userExist){
          res.status(422).json({error:"Email already exists"})
      }else if(password != rpassword){

        return res.status(422).json({error : "Password not matching"});
      }else{
        const user = new User({name:name , email:email, phone:phone, password:password , rpassword});

        const userRegister = await user.save();
        if(userRegister){

            // transporter();
            //res.status(200).json("user registered successfully")
          res.json({
            _id: userRegister._id,
            name:userRegister.name,
            email:userRegister.email,
            phone:userRegister.phone,
            password:userRegister.password,
            isAdmin:userRegister.isAdmin,
            
        })
        }else{
            res.status(422).json("user not registered successfully")
        }


      }
    }catch(err){

    }

});

router.post("/login", async function(req,res){

    try {
        let token;
        const {email,password}  = req.body;
        console.log(req.body)

        if (!email || !password){
            return res.status(422).json({message:"invalid credentials"});
        } 

        const checkUser = await User.findOne({email:email});

        if(checkUser){
            const isMatch = await bcrypt.compare(password,checkUser.password)

            if(!isMatch){
                res.status(422).json({error:"Invalid credentials p"})
            }else{
                
                token = await checkUser.generateAuthToken();
             console.log(token);

            //  res.cookie("jwtoken",token,{
            //      expires :new Date(Date.now() + 25892000000),
            //      httpOnly:true
            //  });
            // res.json({message:"user signin successfully"});
            res.json({
                _id: checkUser._id,
                name:checkUser.name,
                email:checkUser.email,
                phone:checkUser.phone,
                isAdmin:checkUser.isAdmin,
                token:token
            })
            }
        }
        else{
            res.status(422).json({error:"Invalid credentials"})
        }
    } catch (error) {
        console.log(error);
    }
     
});

router.get("/userprofile",protect,async (req,res) => {
    // res.send("success");
   const user  = await User.findById(req.user._id)
   console.log(user);
    if(user){
        res.json({
            _id: user._id,
            name:user.name,
            email:user.email,
            phone:user.phone
        })
    }
   
    else{
        res.status(402).json({error:"Invalid"})
    }
   // res.send("ok")
})

router.put("/UserUpdate",protect,async(req,res) => {
    const user = await User.findById(req.user._id)
    if(user){
       user.name = req.body.name || user.name
       user.email = req.body.email || user.email
    //    if(req.body.password){
    //        user.password = req.body.password
    //    }
       const updateUser = await user.save()
       res.json({
        _id: updateUser._id,
        name:updateUser.name,
        email:updateUser.email,
        phone:updateUser.phone,
        isAdmin:updateUser.isAdmin,
        // token:generateAuthToken(updateUser._id)
    })
    }else{
        res.status(422).json({error:"Not Updated"})
    }
})


module.exports = router;
