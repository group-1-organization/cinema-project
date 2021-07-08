const express = require('express');
const router = express.Router();
const Movie = require('../models/NewMovie');

//create movie
router.post('/newmovies', async (req, res) => {
    try {
        const movie = new Movie({
            title: req.body.title,
            poster: req.body.poster,
            actors: req.body.actors,
            director: req.body.director,
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
router.get('/newmovies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
    } catch {
        res.status(404);
        res.send({ error: "movie doesn't exist" });
    }
})




//update movie
router.patch('/newmovies/:id', async (req, res) => {
    console.log(req.body);
    try {
        let movie = await Movie.findById(req.params.id);
        if (req.body.title) { movie.title = req.body.title };
        if (req.body.poster) { movie.poster = req.body.poster };
        if (req.body.actors) { movie.actors = req.body.actors };
        if (req.body.director) { movie.director = req.body.director };
        await movie.save();
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: 'movie does not exist' })
    }
});

//delete movie
router.delete('/newmovies/:id', async (req, res) => {
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