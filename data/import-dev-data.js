const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Post = require('../models/postModel')

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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();

        //Guardo los datos en MongoDB
        await Post.create(data)

        console.log('Data successfully loaded!');
        process.exit();

    } catch (err) {
        console.error('Error loading data: ', err);
        process.exit(1);
    }
};

importData();

module.exports = importData