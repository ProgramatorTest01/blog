const express = require("express");
const router = express.Router();

let commentSchema = require("../models/Comment");

router.route("/create-comment").post((req, res, next) => {
  const today = new Date();
  const commentData = {
    articleId: req.body.articleId,
    titleArticle: req.body.titleArticle,
    user: req.body.user,
    content: req.body.content,
    created: today,
  };

  commentSchema.create(commentData, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      return res.json(data);
    }
  });
});

router.route("/").get((req, res) => {
  commentSchema.find((error, data) => {
    if (error) {
      console.log(error);
      return res.json("");
    } else {
      return res.json(data);
    }
  });
});

router.route("/one-comment/:id").get((req, res) => {
  commentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
      return res.json("");
    } else {
      return res.json(data);
    }
  });
});

router.route("/delete-comment/:id").delete((req, res, next) => {
  commentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
