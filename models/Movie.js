const {Schema, model} = require('mongoose')

const schema = new Schema({
    adult: {type: Boolean},
    backdrop_path: {type: String},
    genre_ids: {type: Array},
    id: {type: Number},
    original_language: {type: String},
    original_title: {type: String},
    overview: {type: String},
    popularity: {type: Number},
    poster_path: {type: String},
    release_date: {type: String},
    title: {type: String},
    video: {type: Boolean},
    vote_average: {type: Number},
    vote_count: {type: Number},
    isWatchedAlredy: {type: Boolean, default: false},
    myVote: {type: Number, default: 0},
    myComment: {type: String, default: ''},
})

module.exports = model('Movie', schema)