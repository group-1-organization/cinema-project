const express = require('express');

const mongoose = require('mongoose');

const movieroutes = require('./routes/movies');
const bookingroutes = require('./routes/bookings');
const topicroutes = require('./routes/topics');
const commentroutes = require('./routes/comments');
const ratingroutes = require('./routes/ratings');

const cors = require('cors');
const newmovieroutes = require('./routes/newmovies')
const venueroutes = require('./routes/venues')

mongoose.connect('mongodb+srv://James:jbmdbc@cluster0.h5n6v.mongodb.net/cinema?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();

        app.use(cors());

        app.use(express.json());

        app.use('/cinema', movieroutes);

        app.use('/cinema', bookingroutes);

        app.use('/cinema', topicroutes);
        app.use('/cinema', commentroutes);
        app.use('/cinema', ratingroutes);

        app.use('/cinema', newmovieroutes);

        app.use('/cinema', venueroutes)

        app.listen(5000, () => {
            console.log("server has started");
        });

    })