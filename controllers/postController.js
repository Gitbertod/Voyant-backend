const Post = require('../models/postModel')

exports.getAllPosts = async (req, res) => {
    try {
        //CONSUMO DESDE LA API
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const data = await response.json()

        //CONSUMO DESDE MONGODB
        const posts = await Post.find()

        res.status(200).json({
            status: 'succes',
            results: posts.length,
            data: posts
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        res.status(200).json({
            status: "post by id found!",
            data: post
        })

    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        })
    }
}

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body)
        res.status(201).json({
            status: 'success',
            message: "Object created!",
            data: newPost
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "Post deleted!",
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}

exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            data: updatedPost
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: (err)
        })
    }
}
