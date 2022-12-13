const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post_Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    likes: { type: Number, required: true },
    description: { type: String, required: true },
    PostImage: { type: String, required: true },
    date: { type: String, required: true },
});
const PostDB = mongoose.model("PostDB", Post_Schema);

module.exports = PostDB;
