const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    topicId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        minlength: 2,
        required: true
    },
    author: {
        type: String,
        minlength: 1,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Comments", commentSchema);