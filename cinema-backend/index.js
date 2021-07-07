const express = require('express');

const mongoose = require('mongoose');

const movieroutes = require('./routes/movies');
const bookingroutes = require('./routes/bookings');
const topicroutes = require('./routes/topics');

mongoose.connect('mongodb://localhost/cinema', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use('/cinema', movieroutes);
        app.use('/cinema', bookingroutes);
        app.use('/cinema', topicroutes);
        app.listen(5000, () => {
            console.log("server has started");
        });
    })