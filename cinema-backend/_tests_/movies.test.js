const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Movie = require('../models/Movie');

describe(`Movies testing`, () => {

    before(() => {
        let exampleMovie = Movie({
            "actors": [
                "Emily Blunt",
                "Djimon Hounsou",
                "Cillian Murphy",
                "Noah Jupe",
                "Millicent Simmonds"
            ],
            "showings": [
                "16:30",
                "18:00",
                "20:00"
            ],
            "title": "A Quiet Place Part II big ol' test",
            "poster": "aqp.jpg",
            "director": "John Krasinski"
        })
        // exampleMovie.save().then(() => console.log('complete'));
    })

    after(() => {
        Movie.deleteMany({ 'title': 'testtitle' }, function (err) {
            if (err) return handleError(err);
        });
    })

    it(`should return string when '/test' is accessed`, (done) => {
        chai.request(app).get('/cinema/test').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            expect(response).to.have.property('text', "hello from the test");
            done();
        })
    })

    it(`should get movies with showings`, (done) => {
        chai.request(app).get('/cinema/movies').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            // console.log("RESPONSE" + response.text);
            body.map((movie) => {
                expect(movie).to.be.a("object");
                expect(movie).to.contain.keys("title");
                expect(movie).to.contain.keys("showings");
                // expect(movie.showings).to.be.an('array').that.is.not.empty;
                expect(movie.title).to.be.a("string");
            })
            done();
        })
    })

    it(`should get movies without showings`, (done) => {
        chai.request(app).get('/cinema/newmovies').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((movie) => {
                expect(movie).to.be.a("object");
                expect(movie).to.contain.keys("title");
                expect(movie.title).to.be.a("string");
                expect(movie.showings).to.be.an('array').that.is.empty;
            })
            done();
        })
    })

    it(`should create a new movie`, (done) => {
        chai.request(app).post('/cinema/movies').send({
            "actors": [
                "actor1",
                "actor2"
            ],
            "showings": [],
            "title": "testtitle",
            "poster": "test.jpg",
            "director": "testdirector",
        }).end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const movie = response.body;
            expect(movie).to.be.a("object");
            expect(movie).to.contain.keys("title");
            expect(movie.title).to.be.a("string");
            expect(movie.title).to.equal("testtitle");
            done();
        })
    })

    it(`should get all movie titles`, (done) => {
        chai.request(app).get('/cinema/movies').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((title) => {
                expect(title.title).to.be.a("string");
            })
            done();
        })
    })

    it(`should find a movie by id`, (done) => {
        chai.request(app).get('/cinema/movies/60ec2b8fe0e83670f9f2a507').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const movie = response.body;
            expect(movie).to.be.a("object");
            expect(movie).to.contain.keys("title");
            expect(movie.title).to.be.a("string");
            expect(movie.title).to.equal("A Quiet Place Part II");
            done();
        })
    })

    it(`should find a movie by name`, (done) => {
        chai.request(app).get('/cinema/movies/name/A Quiet Place Part II').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((movie) => {
                expect(movie).to.be.a("object");
                expect(movie).to.contain.keys("title");
                expect(movie.title).to.be.a("string");
                expect(movie.title).to.equal("A Quiet Place Part II")
            })
            done();
        })
    })

    it(`should find a movie by search query`, (done) => {
        chai.request(app).get('/cinema/movies/find/lower').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((movie) => {
                expect(movie).to.be.a("object");
                expect(movie).to.contain.keys("title");
                expect(movie.title).to.equal("The Green Knight")
                expect(movie.director).to.equal("David Lowery");
            })
            done();
        })
    })




    //TODO

    it.skip(`should delete the movie in the db`, (done) => {
        chai.request('localhost:5000').delete('/cinema/movies/60ec2b8fe0e83670f9f2a507').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect
        })
    })

    it.skip(`should update the movie in the db`, (done) => {
        chai.request('localhost:5000').patch('/cinema/movies/60ec2b8fe0e83670f9f2a507').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect
        })
    })
})