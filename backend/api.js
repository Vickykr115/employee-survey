const express = require("express"); // calling express framework
const app = express();             // creating object of express
const cors = require("cors");     // calling cors origin library to allow data communication between 2 server
app.use(cors());                 // creating object of cors library
app.use(express.json());        // injecting the json to handle json data communication

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/project");
const db = mongoose.connection;

db.on("error", (error)=>console.log("Error in DB Connection"));
db.on("open", ()=>console.log("DataBase Is Connected..."));

const login = require("./loginapi");
app.use("/login", login); // http://localhost:2222/login

const signup = require("./signupapi");
app.use("/signup", signup); // http://localhost:2222/signup

const surveyapi = require("./surveyapi");
app.use("/survey", surveyapi); // http://localhost:2222/survey

app.listen(2222, function(){
    console.log("The server is live.. on : http://localhost:2222");
})