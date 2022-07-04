const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
    title: {type: String,required: true,},
    description: {type: String,required: true,},
    tags: String,
    author: {type: String,required: true,},
    likes: {type: Number,default: 0,},
});
let Article = mongoose.model("Article", articleSchema);
module.exports = Article;