const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

router.post('/bookings', async (req, res) => {
    try {
        const booking = new Booking({
            movie: req.body.movie,
            date: req.body.date,
            screening: req.body.screening,
            booker: req.body.booker,
            adults: req.body.adults,
            children: req.body.children,
            concessions: req.body.concessions,
            noOfSeats: req.body.noOfSeats
        });
        // console.log("Log: " + booking);
        await booking.save();
        res.send(booking);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

router.get('/bookings', async (req, res) => {
    try {
        const booking = await Booking.find();
        // console.log("Bookings: " + booking);
        res.send(booking);
    } catch {
        res.status(404);
        res.send({ error: "booking doesn't exist" });
    }
})

router.get('/bookings/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.send(booking);
    } catch {
        res.status(404);
        res.send({ error: "booking doesn't exist" });
    }
})

router.patch('/bookings/:id', async (req, res) => {
    console.log(req.body);
    try {
        let booking = await Booking.findById(req.params.id);
        if (req.body.movie) { booking.movie = req.body.movie };
        if (req.body.date) { booking.date = req.body.date };
        if (req.body.screening) { booking.screening = req.body.screening };
        if (req.body.booker) { booking.movie = req.body.booker };
        if (req.body.adults) { booking.movie = req.body.adults };
        if (req.body.children) { booking.movie = req.body.children };
        if (req.body.concessions) { booking.concession = req.body.concessions };
        if (req.body.noOfSeats) { booking.noOfSeats = req.body.noOfSeats };
        await booking.save();
        res.send(booking);
    } catch {
        res.status(404);
        res.send({ error: "res.error.message" });
    }
});

router.delete('/bookings/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        await booking.deleteOne();
        res.send(booking);
    } catch {
        res.status(404);
        res.send({ error: "booking doesn't exist" });
    }
});

module.exports = router;