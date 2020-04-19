const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AdminSchema = new Schema(
  {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    collection: "admin"
  }
);

module.exports = mongoose.model("admin", AdminSchema);
