const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Movie = require('../models/Movie');

describe(`Movies testing`, () => {

    before(async () => {
        let deleteTest = Movie({
            "actors": [
                "actor1",
                "actor2"
            ],
            "showings": [],
            "title": "deleteTest",
            "poster": "test.jpg",
            "director": "testdirector"
        })

        let updateTest = Movie({
            "actors": [
                "actor1",
                "actor2"
            ],
            "showings": [],
            "title": "updateTest",
            "poster": "test.jpg",
            "director": "testdirector"
        })
        await deleteTest.save();
        await updateTest.save();
    })

    after(() => {
        Movie.deleteMany({ 'title': 'createTest' }, function (err) {
            if (err) return handleError(err);
        });

        Movie.deleteMany({ 'title': 'updateTest' }, function (err) {
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
            body.map((movie) => {
                expect(movie).to.be.a("object");
                expect(movie).to.contain.keys("title");
                expect(movie).to.contain.keys("showings");
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
            "title": "createTest",
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
            expect(movie.title).to.equal("createTest");
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
        chai.request(app).get('/cinema/movies/60eee849a9ed4f17e8f98ac8').end((error, response) => {
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

    it(`should update the movie in the db`, (done) => {
        Movie.findOne(
            { 'title': 'updateTest' }, (err, movie) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).patch(`/cinema/movies/${movie._id}`).send({
                        "actors": ["actor1", "actor2", "actor3"],
                        "showings": ["a showing"],
                        "poster": "newpic.jpg",
                        "director": "updateddirector",
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
                        expect(movie.title).to.equal("updateTest");
                        expect(movie).to.contain.keys("director");
                        expect(movie.director).to.be.a("string");
                        expect(movie.director).to.equal("updateddirector");
                        done();
                    })
                }
            })
    })

    it(`should delete the movie in the db`, (done) => {
        Movie.findOne(
            { 'title': 'deleteTest' }, (err, movie) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).delete(`/cinema/movies/${movie._id}`).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response.text).to.equal(`${movie.title} deleted`);
                        expect(response).to.not.be.null;
                        done();
                    })
                }
            })
    })
})