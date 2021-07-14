const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Rating = require('../models/Rating');

describe(`Ratings testing`, () => {

    before(async () => {
        let deleteTest = Rating({
            "movieName": "deleteTest",
            "rating": 1,
        })

        let updateTest = Rating({
            "movieName": "updateTest",
            "rating": 2,
        })
        await deleteTest.save();
        await updateTest.save();
    })

    after(() => {
        Rating.deleteMany({ 'movieName': 'createTest' }, function (err) {
            if (err) return handleError(err);
        });

        Rating.deleteMany({ 'movieName': 'updateTest' }, function (err) {
            if (err) return handleError(err);
        });
    });

    it(`should create a rating`, (done) => {
        chai.request(app).post('/cinema/ratings').send({
            "movieName": "createTest",
            "rating": 2
        }).end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const rating = response.body;
            expect(rating).to.be.a("object");
            expect(rating).to.contain.keys("movieName");
            expect(rating.movieName).to.be.a("string");
            expect(rating.movieName).to.equal("createTest");
            expect(rating).to.contain.keys("rating");
            expect(rating.rating).to.be.a("number");
            done();
        })
    })

    it(`should get all ratings`, (done) => {
        chai.request(app).get('/cinema/ratings').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((rating) => {
                expect(rating).to.be.a("object");
                expect(rating).to.contain.keys("movieName");
                expect(rating.movieName).to.be.a("string");
                expect(rating).to.contain.keys("rating");
                expect(rating.rating).to.be.a("number");
            })
            done();
        })
    })

    it(`should get average rating and rating count for a movie`, (done) => {
        chai.request(app).get('/cinema/ratings/movie/Fast & Furious 9').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((rating) => {
                expect(rating).to.be.a("object");
                expect(rating).to.contain.keys("_id");
                expect(rating).to.contain.keys("avgRating");
                expect(rating).to.contain.keys("count");
                expect(rating._id).to.equal("Fast & Furious 9");
                expect(rating.avgRating).to.be.a("number");
                expect(rating.count).to.be.a("number");

            })
            done();
        })
    })

    it(`should update the rating in the db`, (done) => {
        Rating.findOne(
            { 'movieName': 'updateTest' }, (err, rating) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).patch(`/cinema/ratings/${rating._id}`).send({ "rating": 5 }).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response).to.not.be.null;
                        const rating = response.body;
                        console.log(rating.text);
                        expect(rating).to.be.a("object");
                        expect(rating).to.contain.keys("movieName");
                        expect(rating.movieName).to.be.a("string");
                        expect(rating.movieName).to.equal("updateTest");
                        expect(rating).to.contain.keys("rating");
                        expect(rating.rating).to.be.a("number");
                        expect(rating.rating).to.equal(5);
                        done();
                    })
                }
            })
    })

    it(`should delete the rating in the db`, (done) => {
        Rating.findOne(
            { 'movieName': 'deleteTest' }, (err, rating) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).delete(`/cinema/ratings/${rating._id}`).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response.text).to.equal(`Rating of ${rating.movieName} deleted`);
                        expect(response).to.not.be.null;
                        done();
                    })
                }
            })
    })
})
