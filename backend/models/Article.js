const mongoose = require("mongoose");
const schema = mongoose.Schema;

let articleSchema = new schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    content: {
      type: String,
    },
    info: {
      type: String,
    },
    photo: {
      type: String,
    },
    created: {
      type: Date,
      required: Date.now,
    },
  },
  {
    collection: "articles",
  }
);

module.exports = mongoose.model("Article", articleSchema);
