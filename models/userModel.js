const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        first:{
            type: String,
            require: [true, "User must have a first name"]
        },
        last:{
            type: String,
            require: [true, "User must have a last name"]
        }
    },
    email: {
        type: String,
        require: [true, "User must have a email"],
        unique: true,
    },
    address: {
        city:{
            type: String,
            required: [true, "Address must have a city"]
        },
        country: {
            type: String,
            required: [true, "Address must have a country"]
        },
    }, phone: {
        type: String,
        require: [true, "User must have a phone"]
    },
     picture: {
        large:{
            type: String,
            require: [true, "User must have a picture"]
        }
    }

})


const User = mongoose.model('User', userSchema)
module.exports = User;