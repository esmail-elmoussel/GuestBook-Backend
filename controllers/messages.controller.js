const express = require("express");
const server = express.Router();

// require models
const User = require("../models/User.model");
const Message = require("../models/Message.model");

// require controllers
const addMessage = require("./messagesController/addMessage");
const editMessage = require("./messagesController/editMessage");
const deleteMessage = require("./messagesController/deleteMessage");
const addComment = require("./messagesController/addComment");
const home = require("./messagesController/home");

//// end points
server.post("/add/:username", addMessage(User, Message));
server.put("/edit/:_id", editMessage(Message));
server.delete("/delete/:_id", deleteMessage(Message));
// server.put("/comment/:id", addComment());
// server.get("/list", home());

module.exports = server;
