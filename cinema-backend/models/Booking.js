const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    movie: {
        type: String,
        minlength: 2,
        required: true
    },
    screening: {
        type: String,
        minlength: 1,
        required: true
    },
    booker: {
        type: String,
        minlength: 2,
        required: true
    },
    adults: {
        type: Number,
        minlength: 1,
        required: false
    },
    children: {
        type: Number,
        minlength: 1,
        required: false
    },
    concessions: {
        type: Number,
        minlength: 1,
        required: false
    },
    noOfSeats: {
        type: Number,
        minlength: 1,
        required: true
    }
})

module.exports = mongoose.model("Bookings", bookingSchema);