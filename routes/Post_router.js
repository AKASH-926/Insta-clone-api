const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const PostDB = require("../models/Post_schema");
const Post_route = express.Router();
const cloudinary = require("cloudinary").v2;
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
cloudinary.config({
    cloud_name: "dlzsf2clj",
    api_key: "842877512291622",
    api_secret: "HYYS9PEPtfprLLIj3sE3wcAQ5EA",
});
Post_route.get("/instaclone/data", async (req, res) => {
    try {
        const Posts = await PostDB.find();
        res.status(200).json({
            status: "Sucess",
            Posts: Posts,
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed to fetch",
            message: e.message,
        });
    }
});
Post_route.post("/instaclone/data", async (req, res) => {
    try {
        const file = req.files.image;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
            folder: "images",
        });

        const t = new Date();
        const today =
            t.getDate() +
            "-" +
            months[parseInt(t.getMonth())] +
            "-" +
            t.getFullYear();
        const Posts = await PostDB.create({
            name: req.body.name,
            location: req.body.location,
            likes: Math.floor(Math.random() * 1000),
            description: req.body.description,
            PostImage: result.url,
            date: today,
        });
        res.status(200).json({
            status: "Sucess",
            Posts: Posts,
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed to post",
            message: e.message,
        });
    }
});

module.exports = Post_route;
