const express = require("express");
const bodyparser = require("body-parser");
const Post_route = require("./routes/Post_router");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use(
    fileUpload({
        useTempFiles: true,
        limits: { fileSize: 50 * 2024 * 1024 },
    })
);

app.use("/", Post_route);
module.exports = app;
