const User = require('../models/userModel');


exports.getAllUsers = async (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            data: "here the data users!"

        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error
        })
    }
}