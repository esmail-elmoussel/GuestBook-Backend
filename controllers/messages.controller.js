const express = require("express");
const server = express.Router();
const verifyToken = require("../helpers/verifyToken");

// require models
const User = require("../models/User.model");
const Message = require("../models/Message.model");

// require controllers
const addMessage = require("./messagesController/addMessage");
const editMessage = require("./messagesController/editMessage");
const deleteMessage = require("./messagesController/deleteMessage");
const addComment = require("./messagesController/addComment");
const getAllMessages = require("./messagesController/getAllMessages");

// end points
server.post("/add/:username", verifyToken(), addMessage(User, Message));
server.put("/edit/:_id", verifyToken(), editMessage(Message));
server.delete("/delete/:_id", verifyToken(), deleteMessage(Message));
server.put("/comment/:_id", verifyToken(), addComment(User, Message));
server.get("/list", verifyToken(), getAllMessages(Message));

module.exports = server;
