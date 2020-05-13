const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const server = express.Router();

// require models
const User = require("../models/User.model");

// require controllers
const register = require("./usersController/register");
const login = require("./usersController/login");

// end points
server.post("/register", register(User, bcrypt));
server.post("/login", login(User, bcrypt, jwt, config));

module.exports = server;
