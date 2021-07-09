const express = require('express');
const router = express.Router();
const Venue = require('../models/Venue');

//create venue
router.post('/venue', async (req, res) => {
    try {
        const venue = new Venue({
            name: req.body.name,
            picture: req.body.picture,
            opening: req.body.opening,
            description: req.body.description,
            contact: req.body.contact,
            offer: req.body.offer,
        });
        console.log("Log: " + venue);
        await venue.save();
        res.send(venue);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

//get all venue
router.get('/venue', async (req, res) => {
    try {
        const venue = await Venue.find();
        res.send(venue);
    } catch {
        res.status(404);
        res.send({ error: "venue doesn't exist" });
    }
})




//update venue
router.patch('/venue/:id', async (req, res) => {
    console.log(req.body);
    try {
        let venue = await Venue.findById(req.params.id);
        if (req.body.name) { venue.name = req.body.name };
        if (req.body.picture) { venue.picture = req.body.picture };
        if (req.body.opening) { venue.opening = req.body.opening };
        if (req.body.description) { venue.description = req.body.description };
        if (req.body.contact) { venue.contact = req.body.contact };
        if (req.body.offer) { venue.offer = req.body.offer };
        await venue.save();
        res.send(venue);
    } catch {
        res.status(404);
        res.send({ error: 'venue does not exist' })
    }
});

//delete venue
router.delete('/venue/:id', async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.id);
        await venue.deleteOne();
        res.send(venue);
    } catch {
        res.status(404);
        res.send({ error: "venue doesn't exist" });
    }
});

module.exports = router;