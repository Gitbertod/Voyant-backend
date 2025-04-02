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