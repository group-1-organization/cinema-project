const express = require('express');
const router = express.Router();

const Rating = require('../models/Rating');

//create rating
router.post('/ratings', async (req, res) => {
    try {
        const rating = new Rating({
            movieName: req.body.movieName,
            rating: req.body.rating
        });
        await rating.save();
        res.send(rating);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

//get all ratings
router.get('/ratings', async (req, res) => {
    try {
        const rating = await Rating.find();
        res.send(rating);
    } catch {
        res.status(404);
        res.send({ error: "rating doesn't exist" });
    }
})

//get movie rating
router.get('/ratings/movie/:name', async (req, res) => {
    try {
        const rating = await Rating.aggregate(
            [
                {
                    $match: {
                        "movieName": req.params.name
                    }
                },
                {
                    $group: {
                        _id: "$movieName",
                        avgRating: { $avg: "$rating" },
                        count: { $sum: 1 }
                    }
                }
            ]
        )
        res.send(rating);
    } catch {
        res.status(404);
        res.send({ error: "rating doesn't exist" });
    }
})

//update rating
router.patch('/ratings/:id', async (req, res) => {
    try {
        let rating = await Rating.findById(req.params.id);
        if (req.body.rating) { rating.rating = req.body.rating };
        await rating.save();
        res.send(rating);
    } catch {
        res.status(404);
        res.send({ error: 'rating does not exist' })
    }
});

//delete rating
router.delete('/ratings/:id', async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id);
        await rating.deleteOne();
        res.send(`Rating of ${rating.movieName} deleted`);
    } catch {
        res.status(404);
        res.send({ error: "rating doesn't exist" });
    }
});

module.exports = router;