const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    name  :{type:String, required:true},
    gender  :{type:String, required:true},
    nationality  :{type:String, required:true},
    email  :{type:String, required:true},
    mobile  :{type:String, required:true},
    address  :{type:String, required:true},
    message  :{type:String, required:true}
});

module.exports = mongoose.model("Survey", tableStructure);

