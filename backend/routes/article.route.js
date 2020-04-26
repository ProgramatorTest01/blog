const express = require("express");
const router = express.Router();

let articleSchema = require("../models/Article");

router.route("/create-article").post((req, res, next) => {
  const today = new Date();
  const articleData = {
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    info: req.body.info,
    photo: req.body.photo,
    created: today,
  };

  articleSchema.create(articleData, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      return res.json(data);
    }
  });
});

router.route("/").get((req, res) => {
  articleSchema.find((error, data) => {
    if (error) {
      console.log(error);
      return res.json("");
    } else {
      return res.json(data);
    }
  });
});

router.route("/edit-article/:id").get((req, res) => {
  articleSchema.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
      return res.json("");
    } else {
      return res.json(data);
    }
  });
});

router.route("/one-article/:id").get((req, res) => {
  articleSchema.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
      return res.json("");
    } else {
      return res.json(data);
    }
  });
});

router.route("/update-article/:id").put((req, res, next) => {
  articleSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log("Updated!");
        return res.json(data);
      }
    }
  );
});

router.route("/delete-article/:id").delete((req, res, next) => {
  articleSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
