const mongoose = require("mongoose");
const {Schema, model, Types} = require('mongoose')

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
    movies: {type: Array}

})

module.exports = mongoose.model('User', UserSchema)