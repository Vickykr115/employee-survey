const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    email  :{type:String, required:true},
    password  :{type:String, required:true}
});

module.exports = mongoose.model("Login", tableStructure);