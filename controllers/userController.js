const User = require('../models/userModel');


exports.getAllUsers = async (req, res) => {
    try {
        //CONSUMO DESDE LA API
        // const response = await fetch("https://randomuser.me/api/?results=10")
        // const data = await response.json()

        //CONSUMO DESDE MONGODB
        const users = await User.find()

        res.status(200).json({
            status: 'Success',
            results:users.length,
            data: users

        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error
        })
    }
}