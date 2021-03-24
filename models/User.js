const mongoose = require("mongoose");
const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Number,
        required: false,
    },
    movies: {
        type: Array,
        required: true,
    }

})

module.exports = mongoose.model('User', UserSchema)