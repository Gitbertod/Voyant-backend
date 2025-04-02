const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: [true, "A post must have a title"],
    },
    title: {
        type: String,
        required: [true, "A post must have a title"],
        unique: true,
        trim: true
    },
    body:{
        type: String,
        required: [true, "A post must have a title"],
    }
})

const Post = mongoose.model('Post',postSchema);

module.exports = Post;