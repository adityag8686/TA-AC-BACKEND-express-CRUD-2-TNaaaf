const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");

// handled the comments/commentid/edit Route here  to  show a form to use so the use can
//edit  the comment
router.get("/:id/edit", (req, res) => {
  let id = req.params.id;
  Comment.findById(id, (err, comment) => {
    console.log(comment);
    res.render("editcomment", { comment: comment });
  });
});

// handled the post request on the comments/commentid/ Route .So a user can udpate his or her comment once  the  user click on the submit button
router.post("/:id/", (req, res, next) => {
  let id = req.params.id;
  Comment.findByIdAndUpdate(id, req.body, (err, udpdatedComment) => {
    if (err) return next(err);
    return res.redirect("/articles");
  });
});
//Delete the user comment
router.get("/:id/delete/", (req, res, next) => {
  let id = req.params.id;
  Comment.findByIdAndDelete(id, (err, deletedComment) => {
    if (err) return next(err);
    return res.redirect("/articles");
  });
});

// Adding  the like and dislike functionality in the comment
// handling Route for like
// /comments/<%=eachComment._id%>/<%=eachComment.likes%>/like
router.get("/:id/:like/like", (req, res) => {
  let id = req.params.id;
  let like = req.params.like;
  Comment.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true },
    (err, udpdatedComment) => {
      if (err) return next(err);
      res.redirect(`/articles`);
    }
  );
});

// handling route for  the dislike
router.get("/:id/:like/dislike", (req, res, next) => {
  let id = req.params.id;
  let like = req.params.like;
  let likeCount = Number(like);
  if (likeCount >= 1) {
    Comment.findByIdAndUpdate(
      id,
      { $inc: { likes: -1 } },
      { new: true },
      (err, updatedArticle) => {
        if (err) return next(err);
        res.redirect(`/articles`);
      }
    );
  } else {
    res.redirect(`/articles`);
  }
});

module.exports = router;