const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Venue = require('../models/Venue');

describe(`Venues testing`, () => {

    before(async () => {
        let deleteTest = Venue({
            "name": "deleteTest",
            "picture": "venue.jpg",
            "opening": "9.00 - 10.30",
            "description": "a place where things happen maybe",
            "contact": "0118 999 881 999 119 725 3",
            "offer": "N/A"
        })

        let updateTest = Venue({
            "name": "updateTest",
            "picture": "venue.jpg",
            "opening": "9.00 - 10.30",
            "description": "a place where things happen maybe",
            "contact": "0118 999 881 999 119 725 3",
            "offer": "N/A"
        })
        await deleteTest.save();
        await updateTest.save();
    })

    after(() => {
        Venue.deleteMany({ "name": "createTest" }, function (err) {
            if (err) return handleError(err);
        });

        Venue.deleteMany({ "name": "updateTest" }, function (err) {
            if (err) return handleError(err);
        });
    });

    it(`should create a venue`, (done) => {
        chai.request(app).post('/cinema/venue').send({
            "name": "createTest",
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
            expect(venue.name).to.equal("createTest");
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

    it(`should update the venue in the db`, (done) => {
        Venue.findOne(
            { 'name': 'updateTest' }, (err, venue) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).patch(`/cinema/venue/${venue._id}`).send({ "description": "the description has been updated" }).end((error, response) => {
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
                        expect(venue.name).to.equal("updateTest");
                        expect(venue).to.contain.keys("description");
                        expect(venue.description).to.be.a("string");
                        expect(venue.description).to.equal("the description has been updated");
                        done();
                    })
                }
            })
    })

    it(`should delete the venue in the db`, (done) => {
        Venue.findOne(
            { 'name': 'deleteTest' }, (err, venue) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).delete(`/cinema/venue/${venue._id}`).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response.text).to.equal(`${venue.name} deleted`);
                        expect(response).to.not.be.null;
                        done();
                    })
                }
            })
    })
})