const express = require("express");
const bodyparser = require("body-parser");
const Post_route = require("./routes/Post_router");
const app = express();

app.use(bodyparser.json());
app.use("/", Post_route);
module.exports = app;
