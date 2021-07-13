const express = require('express');

const mongoose = require('mongoose');

const movieroutes = require('./routes/movies');
const bookingroutes = require('./routes/bookings');
const topicroutes = require('./routes/topics');
const commentroutes = require('./routes/comments');
const ratingroutes = require('./routes/ratings');

const cors = require('cors');
const venueroutes = require('./routes/venues')

const { mongodbConnectionString } = require('./const.json');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/cinema', movieroutes);
app.use('/cinema', bookingroutes);
app.use('/cinema', topicroutes);
app.use('/cinema', commentroutes);
app.use('/cinema', ratingroutes);
app.use('/cinema', venueroutes)

mongoose.connect(mongodbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        //if error       

    });

const server = app.listen(5000, () => {
    console.log("server has started");

})

module.exports = server;