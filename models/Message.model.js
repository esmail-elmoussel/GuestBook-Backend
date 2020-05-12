const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  owner: String,
  content: {
    type: String,
    required: [true, "comment content is required!"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const messageSchema = new Schema({
  username: { type: String, ref: "User" },
  content: {
    type: String,
    required: [true, "message content is required!"],
  },
  comments: [commentSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

const message = mongoose.model("message", messageSchema);

module.exports = message;
