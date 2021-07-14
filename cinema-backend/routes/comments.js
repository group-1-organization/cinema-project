const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');

//create comment
router.post('/comments', async (req, res) => {
    try {
        // console.log(req.body);
        const comment = new Comment({
            topicId: req.body.topicId,
            message: req.body.message,
            author: req.body.author
        });
        // console.log("Log: " + comment);
        await comment.save();
        res.send(comment);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

//get all comments from a topic
router.get('/comments/:id', async (req, res) => {
    try {
        const comments = await Comment.find({ topicId: req.params.id }).sort({ 'createdAt': 'desc' });
        res.send(comments);
    } catch {
        res.status(404);
        res.send({ error: "comments doesn't exist" });
    }
})

//update comment
router.patch('/comments/:id', async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.id);
        if (req.body.message) { comment.message = req.body.message };
        await comment.save();
        res.send(comment);
    } catch {
        res.status(404);
        res.send({ error: 'comment does not exist' })
    }
});

//delete comment
router.delete('/comments/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        await comment.deleteOne();
        res.send(`Comment by ${comment.author} at ${comment.createdAt} deleted`);
    } catch {
        res.status(404);
        res.send({ error: "comment doesn't exist" });
    }
});

module.exports = router;