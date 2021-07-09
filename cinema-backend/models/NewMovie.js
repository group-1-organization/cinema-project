const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newMovieSchema = new Schema({
    title: {
        type: String,
        minlength: 2,
        required: true
    },
    poster: {
        type: String,
        minlength: 2,
        required: true
    },
    actors: {
        type: Array,
        minlength: 1,
        required: true
    },
    director: {
        type: String,
        minlength: 2,
        required: true
    }
});

module.exports = mongoose.model("NewMovies", newMovieSchema);