const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Booking = require('../models/Booking');

describe(`Bookings testing`, () => {

    before(async () => {
        let deleteTest = Booking({
            "movie": "testmovie",
            "date": "date",
            "screening": "12:00",
            "booker": "deleteTest",
            "adults": 1,
            "children": 0,
            "concessions": 1,
            "noOfSeats": 2
        })

        let updateTest = Booking({
            "movie": "testmovie",
            "date": "date",
            "screening": "12:00",
            "booker": "updateTest",
            "adults": 1,
            "children": 0,
            "concessions": 1,
            "noOfSeats": 2
        })
        await deleteTest.save();
        await updateTest.save();
    })

    after(() => {
        Booking.deleteMany({ 'booker': 'createTest' }, function (err) {
            if (err) return handleError(err);
        });

        Booking.deleteMany({ 'booker': 'updateTest' }, function (err) {
            if (err) return handleError(err);
        });
    });


    it(`should create a booking`, (done) => {
        chai.request(app).post('/cinema/bookings').send({
            "movie": "testmovie",
            "date": "date",
            "screening": "12:00",
            "booker": "createTest",
            "adults": 1,
            "children": 0,
            "concessions": 1,
            "noOfSeats": 2
        }).end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const booking = response.body;
            expect(booking).to.be.a("object");
            expect(booking).to.contain.keys("booker");
            expect(booking.booker).to.be.a("string");
            expect(booking.booker).to.equal("createTest");
            done();
        })
    })


    it(`should get all bookings`, (done) => {
        chai.request(app).get('/cinema/bookings').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((booking) => {
                expect(booking).to.be.a("object");
                expect(booking).to.contain.keys("booker");
                expect(booking.booker).to.be.a("string");
            })
            done();
        })
    })

    it(`should update the booking in the db`, (done) => {
        Booking.findOne(
            { 'booker': 'updateTest' }, (err, booking) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).patch(`/cinema/bookings/${booking._id}`).send({ "movie": "the movie has been updated" }).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response).to.not.be.null;
                        const booking = response.body;
                        expect(booking).to.be.a("object");
                        expect(booking).to.contain.keys("booker");
                        expect(booking.booker).to.be.a("string");
                        expect(booking.booker).to.equal("updateTest");
                        expect(booking).to.contain.keys("movie");
                        expect(booking.movie).to.be.a("string");
                        expect(booking.movie).to.equal("the movie has been updated");
                        done();
                    })
                }
            })
    })

    it(`should delete the booking in the db`, (done) => {
        Booking.findOne(
            { 'booker': 'deleteTest' }, (err, booking) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).delete(`/cinema/bookings/${booking._id}`).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response.text).to.equal(`Booking by ${booking.booker} for ${booking.movie} deleted`);
                        expect(response).to.not.be.null;
                        done();
                    })
                }
            })
    })
})
