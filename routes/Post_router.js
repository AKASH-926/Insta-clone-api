const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const Post_route = express.Router();

Post_route.get("/", (req, res) => {
  res.status(200).json({
    msg: "sever working fine",
  });
});

module.exports = Post_route;
