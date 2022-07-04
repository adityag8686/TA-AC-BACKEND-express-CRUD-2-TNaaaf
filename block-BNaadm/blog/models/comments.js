const mongoose = require("mongoose");
let commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "articles",
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    author: {
        type: String,
        required: true,
    },
    },
{ timestamps: true });

let Comment = mongoose.model('Comment' , commentSchema);
module.exports = Comment;