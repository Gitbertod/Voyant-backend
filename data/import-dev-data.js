const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Post = require('../models/postModel')
const User = require('../models/userModel')

dotenv.config({ path: './config.env' });


if (!process.env.DATABASE || !process.env.DATABASE_PASSWORD) {
    throw new Error('DATABASE or DATABASE_PASSWORD is not defined in config.env');
}


// Conecto a MongoDB
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
})
    .then(() => console.log('DB Connection succesful!'))
    .catch((err) => console.error('DB Conecction error:', err));

const importData = async () => {
    try {
        // Consumir la API
        const response = await fetch('https://randomuser.me/api/?results=10')
        const data = await response.json();

        //Guardo los datos en MongoDB
        await User.create(data.results)

        console.log('Data successfully loaded!');
        process.exit();

    } catch (err) {
        console.error('Error loading data: ', err);
        process.exit(1);
    }
};

importData();

module.exports = importData