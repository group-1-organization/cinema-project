const express = require('express');

const mongoose = require('mongoose');

const movieroutes = require('./routes/movies');
const bookingroutes = require('./routes/bookings');
const cors = require("cors");




mongoose.connect('mongodb://localhost/cinema', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();

        app.use(cors());

        app.use(express.json());

        app.use('/cinema', movieroutes);

        app.use('/cinema', bookingroutes);

        app.listen(5000, () => {
            console.log("server has started");
        });

    })