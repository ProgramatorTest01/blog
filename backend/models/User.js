const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
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
  },
  created: {
    type: Date,
    required: Date.now
  }
});

module.exports = mongoose.model("users", UserSchema);
