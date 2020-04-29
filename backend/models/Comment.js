const mongoose = require("mongoose");
const schema = mongoose.Schema;

let commentSchema = new schema(
  {
    articleId: {
      type: String,
    },
    titleArticle: {
      type: String,
    },
    user: {
      type: String,
    },
    content: {
      type: String,
    },
    created: {
      type: Date,
      required: Date.now,
    },
  },
  {
    collection: "comments",
  }
);

module.exports = mongoose.model("Comment", commentSchema);
