const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

//create movie
router.post('/movies', async (req, res) => {
    try {
        const movie = new Movie({
            title: req.body.title,
            poster: req.body.poster,
            actors: req.body.actors,
            director: req.body.director,
            showings: req.body.showings
        });
        console.log("Log: " + movie);
        await movie.save();
        res.send(movie);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

//get all movies
router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
    } catch {
        res.status(404);
        res.send({ error: "movie doesn't exist" });
    }
})

//get all movie titles
router.get('/movies/titles', async (req, res) => {
    try {
        const movies = await Movie.find().select('title');
        res.send(movies);
    } catch {
        res.status(404);
        res.send({ error: "bad request" });
    }
})

//find movie by id
router.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: "movie doesn't exist" });
    }
})

//find movie by name
router.get('/movies/name/:title', async (req, res) => {
    Movie.find(
        { 'title': req.params.title },
        (err, movie) => {
            if (err) {
                console.error('An error occurred:', err);
            } else {
                console.log(movie);
                res.send(movie);
            }
        }
    )
})

//update movie
router.patch('/movies/:id', async (req, res) => {
    console.log(req.body);
    try {
        let movie = await Movie.findById(req.params.id);
        if (req.body.title) { movie.title = req.body.title };
        if (req.body.poster) { movie.poster = req.body.poster };
        if (req.body.actors) { movie.actors = req.body.actors };
        if (req.body.director) { movie.director = req.body.director };
        if (req.body.showings) { movie.showings = req.body.showings };
        await movie.save();
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: 'movie does not exist' })
    }
});

//delete movie
router.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        await movie.deleteOne();
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: "movie doesn't exist" });
    }
});

module.exports = router;