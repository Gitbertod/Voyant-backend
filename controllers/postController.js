

exports.getAllPosts = async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        res.status(200).json({
            status: 'succes',
            results: data.length,
            data : data
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}