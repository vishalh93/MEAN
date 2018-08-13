var express = require("express");
var router = express.Router();
var mongo = require("mongojs");
var conn = mongo("mongodb://localhost:27017/E-commerce");

router.get("/getcategory",function(req,res){
    conn.category.find(function(err,result){
        res.send(result);
      //  console.log(result);
    });
});
router.get("/getscategory",function(req,res){
    conn.subcat.find(function(err,result){
        res.send(result);
        // console.log(result);
    });
});

router.get("/getsscategory",function(req,res){
    conn.subsubcat.find(function(err,result){
        res.send(result);
       //  console.log(result);
    });
});

router.get("/getbrand",function(req,res){
    conn.brand.find(function(err,result){
       res.send(result);
    //  console.log(result);
    });
});

module.exports=router;