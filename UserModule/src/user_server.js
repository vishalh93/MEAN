var express = require("express");
var app = express();
app.use(express.static(__dirname));

var bp = require("body-parser");
app.use(bp.json());

var mongo = require("mongojs");
var conn = mongo("mongodb://localhost:27017/E-commerce");

var cat = require("./user server file/cat");
app.use("/catapi",cat);

app.listen(2222);
console.log("User Server 2222");