const express = require("express");
const server = express.Router();

// require controllers
const addMessage = require("./messagesController/addMessage");
const editMessage = require("./messagesController/editMessage");
const deleteMessage = require("./messagesController/deleteMessage");
const addComment = require("./messagesController/addComment");
const home = require("./messagesController/home");

//// end points
// server.post("/add/:username", addMessage());
// server.put("/edit/:id", editMessage());
// server.delete("/delete/:id", deleteMessage());
// server.put("/comment/:id", addComment());
// server.get("/list", home());

module.exports = server;
