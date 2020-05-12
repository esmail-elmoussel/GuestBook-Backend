const express = require("express");
const server = express.Router();
const bcrypt = require("bcrypt-nodejs");

// require models
const User = require("../models/User.model");

// require controllers
const register = require("./usersController/register");
const login = require("./usersController/login");

//// end points
server.post("/register", register(User, bcrypt));
server.post("/login", login(User, bcrypt));

module.exports = server;
