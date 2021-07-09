const express = require('express');
const router = express.Router();

const Topic = require('../models/Topic');

//create topic
router.post('/topics', async (req, res) => {
    try {
        const topic = new Topic({
            name: req.body.name,
            movieName: req.body.movieName,
            author: req.body.author
        });
        console.log("Log: " + topic);
        await topic.save();
        res.send(topic);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

//get all topics
router.get('/topics', async (req, res) => {
    try {
        const topic = await Topic.find().sort({ 'createdAt': 'desc' });
        res.send(topic);
    } catch {
        res.status(404);
        res.send({ error: "topic doesn't exist" });
    }
})

//find topic
router.get('/topics/:id', async (req, res) => {
    try {
        const topic = await Topic.findById(req.params.id);
        res.send(topic);
    } catch {
        res.status(404);
        res.send({ error: "topic doesn't exist" });
    }
})

module.exports = router;