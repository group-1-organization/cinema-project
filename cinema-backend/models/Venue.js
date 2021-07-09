const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venue = new Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    picture: {
        type: String,
        minlength: 2,
        required: true
    },
    opening: {
        type: String,
        minlength: 2,
        required: true
    },
    description: {
        type: String,
        minlength: 2,
        required: true
    },
    contact: {
        type: String,
        minlength: 2,
        required: true
    },
    offer: {
        type: String,
        minlength: 2,
        required: true
    }
});

module.exports = mongoose.model("venue", venue);