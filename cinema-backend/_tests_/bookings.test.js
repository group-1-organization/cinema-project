const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Booking = require('../models/Booking');

describe(`Bookings testing`, () => {

    after(() => {
        Booking.deleteMany({ "movie": "testmovie" }, function (err) {
            if (err) return handleError(err);
        });
    });


    it(`should create a booking`, (done) => {
        chai.request(app).post('/cinema/bookings').send({
            "movie": "testmovie",
            "screening": "12:00",
            "booker": "John",
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
            expect(booking).to.contain.keys("movie");
            expect(booking.movie).to.be.a("string");
            expect(booking.movie).to.equal("testmovie");
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


    //TODO

    it.skip(`should update the booking in the db`, (done) => {
        chai.request('localhost:5000').patch('/cinema/bookings/60ec2b8fe0e83670f9f2a507').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect
        })
    })

    it.skip(`should delete the booking in the db`, (done) => {
        chai.request('localhost:5000').delete('/cinema/bookings/60ec2b8fe0e83670f9f2a507').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect
        })
    })
})
