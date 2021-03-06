process.env.NODE_ENV  = process.env.NODE_ENV || "development";
var express = require("./config/express");
var db = require("./config/mongoose.js")();
var app = express();
var passport = require('./config/passport')();
app.listen(3000);
module.exports = app;
console.log("Server running at http://localhost:3000.\n" + "using version: " + process.env.NODE_ENV);