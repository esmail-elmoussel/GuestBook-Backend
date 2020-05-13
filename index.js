const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

// connecting to MongoDB
var uristring =
  process.env.MONGODB_URI || "mongodb://localhost:27017/guestbook-app";
mongoose.connect(uristring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB is not running!!!"));
db.once("open", () => {
  console.log("MongoDB is running!");
});

//Middlewares
app.use(bodyParser.json());
app.use(cors());

// end points
app.get("/", (req, res) => {
  res.send("It is working!");
});
const userController = require("./controllers/users.controller");
app.use("/api/users", userController);

const messageController = require("./controllers/messages.controller");
app.use("/api/messages", messageController);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

/* 
<------ END-POINTS ----->

register
login
addMessage
editMessage
deleteMessage
addComment
home

*/
