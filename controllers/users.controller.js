const express = require("express");
const server = express.Router();

// require controllers
const register = require("./usersController/register");
const login = require("./usersController/login");

//// end points
// server.post("/register", register());
// server.post("/login", login());

module.exports = server;
