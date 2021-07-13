const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Venue = require('../models/Venue');

describe(`Venues testing`, () => {

    after(() => {
        Venue.deleteMany({ "name": "testvenue" }, function (err) {
            if (err) return handleError(err);
        });
    });

    it(`should create a venue`, (done) => {
        chai.request(app).post('/cinema/venue').send({
            "name": "testvenue",
            "picture": "venue.jpg",
            "opening": "9.00 - 10.30",
            "description": "a place where things happen maybe",
            "contact": "0118 999 881 999 119 725 3",
            "offer": "N/A"
        }).end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const venue = response.body;
            expect(venue).to.be.a("object");
            expect(venue).to.contain.keys("name");
            expect(venue.name).to.be.a("string");
            expect(venue.name).to.equal("testvenue");
            done();
        })
    })

    it(`should get all venues`, (done) => {
        chai.request(app).get('/cinema/venue').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((topic) => {
                expect(topic).to.be.a("object");
                expect(topic).to.contain.keys("name");
                expect(topic.name).to.be.a("string");
            })
            done();
        })
    })

    it.skip(`should delete the venue in the db`, (done) => {
        chai.request('localhost:5000').delete('/cinema/venue/60ec2b8fe0e83670f9f2a507').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect
        })
    })

    it.skip(`should update the movie in the db`, (done) => {
        chai.request('localhost:5000').patch('/cinema/venue/60ec2b8fe0e83670f9f2a507').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect
        })
    })


})