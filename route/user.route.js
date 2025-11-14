const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  CreateUserOrLogin,
  getUserProfile,
} = require("../controller/user.controller");

const route = express.Router();

route.post("/auth", CreateUserOrLogin);
route.get("/me", protect, getUserProfile);

module.exports = route;
