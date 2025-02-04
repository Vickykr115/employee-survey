const express = require("express");
const router = express.Router();
module.exports = router;

// get http://localhost:2222/login
const Login = require("./loginschema");

router.get("/", async(req, res)=>{
    let alldata = await Login.find();
    res.status(201).json(alldata);
})

router.post("/", async(req, res)=>{
    let newuser = Login({
        email:req.body.email,
        password:req.body.password
    });

    let info = await newuser.save();
    res.status(201).json(info);
})

