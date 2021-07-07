const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');

//create comment
router.post('/comments', async (req, res) => {
    try {
        console.log(req.body);
        const comment = new Comment({
            topicId: req.body.topicId,
            comment: req.body.comment,
            author: req.body.author
        });
        console.log("Log: " + comment);
        await comment.save();
        res.send(comment);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

//get all topics
router.get('/comments/:id', async (req, res) => {
    try {
        const comments = await Comment.find({ topicId: req.params.id }).sort({ 'createdAt': 'desc' });
        res.send(comments);
    } catch {
        res.status(404);
        res.send({ error: "comments doesn't exist" });
    }
})

//find topic
router.get('/comments/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.send(comment);
    } catch {
        res.status(404);
        res.send({ error: "comments doesn't exist" });
    }
})

module.exports = router;