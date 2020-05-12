const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required!"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: 1,
    maxlength: 100,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
