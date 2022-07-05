const express = require("express");
const router = express.Router();
const Book = require("../models/books")
const Author = require("../models/authors")
const Category = require("../models/category")


// routes: /books/new

router.get("/new",(req,res) =>{
    console.log(req.body)
    res.render("bookForm");
});

// post request on /new

router.post("/",(req,res,next)=>{
    
})


module.exports = router;