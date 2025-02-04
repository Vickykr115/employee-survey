const express = require("express")
const router = express.Router();
module.exports = router;

const Survey = require("./surveyschema");

router.get("/", async (req, res) => {
    let alldata = await Survey.find();
    res.status(201).json(alldata);
})

router.post("/", async (req, res) => {
    let newuser = Survey({
        name: req.body.name,
        gender: req.body.gender,
        nationality: req.body.nationality,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        message: req.body.message
    });
    let info = await newuser.save();
    res.status(201).json(info);
})

router.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    let mydata = await Survey.findById(id);
    if(mydata == null){
        res.status(201).json({"message":"No such records"});
    }else{
        await mydata.deleteOne();
        res.status(201).json({"message":"Record Deleted Successfully !"});
    }
})

router.get("/:id", async(req, res)=>{
    let id = req.params.id;

    let mydata = await Survey.findById(id);
    res.status(201).json(mydata);
})

router.put("/", async (req, res) => {
    let id = req.body.id;
    let mydata = await Survey.findById(id);

        mydata.name = req.body.name;
        mydata.gender = req.body.gender;
        mydata.nationality = req.body.nationality;
        mydata.email = req.body.email;
        mydata.mobile = req.body.mobile;
        mydata.address = req.body.address;
        mydata.message = req.body.message;
        await mydata.save();

        res.status(201).json({ 'message': 'Records updated Successfully !' });
})