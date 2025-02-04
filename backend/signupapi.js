const express = require("express");
const router = express.Router();
module.exports = router;

// get http://localhost:2222/signup
const Signup = require("./signupschema");

router.get("/", async(req, res)=>{
    let alldata = await Signup.find();
    res.status(201).json(alldata);
})

router.post("/login", async(req, res)=>{
    let input = {"email":req.body.myemail, "password":req.body.mypassword};
    let alldata = await Signup.findOne(input);

    res.status(201).json(alldata);
})

router.post("/", async(req, res)=>{
    let newuser = Signup({
        name:req.body.name,
        mobile:req.body.mobile,
        email:req.body.email,
        password:req.body.password,
    });

    let info = await newuser.save();
    res.status(201).json(info);
})

