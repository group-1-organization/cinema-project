const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');

describe(`Testing process`, () => {

    before(() => {
        const exampleMovie = {
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
            "_id": "60ec2b8fe0e83670f9f2a507",
            "title": "A Quiet Place Part II",
            "poster": "aqp.jpg",
            "director": "John Krasinski"
        }

    })

    it(`returns 2 when 1+1`, () => {
        let sum = 1;

        sum += 1;

        expect(sum).to.equal(2);
    })

    it(`should return string when '/test' is accessed`, (done) => {
        // chai.request(app).get('/test').end((error, response) => {
        chai.request('localhost:5000').get('/cinema/test').end((error, response) => {
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

    it(`should get all the movies when /movies`, (done) => {
        // chai.request(app).get('/movies').end((error, response) => {
        chai.request('localhost:5000').get('/cinema/movies').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            // expect(body.len()).to.be.equal.to(1);
            const body = response.body;
            body.map((movie) => {
                expect(movie).to.be.a("object");
                expect(movie).to.contain.keys("title");
                expect(movie.title).to.be.a("string");
            })
            done();
        })
    })

    it(`should create a new movie through /movies`, (done) => {
        // chai.request(app).get('/movies').end((error, response) => {
        chai.request('localhost:5000').post('/cinema/movies').send(
            {
                "title": "Space Jam : A New Legacy",
                "poster": "sj.jpg",
                "actors": ["Don Cheadle", "Jim Cummings", "Gabriel Iglesias", "LeBron James", "Zendaya", "Sonequa Martin-Green", "Xosha Roquemore", "Eric Bauza"],
                "director": "Malcolm D. Lee"
            }).end((error, response) => {
                if (error) {
                    console.log(`Something went wrong`);
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                // expect(body.len()).to.be.equal.to(1);
                const body = response.body;
                body.map((movie) => {
                    expect(movie).to.be.a("object");
                    expect(movie).to.contain.keys("title");
                    expect(movie.title).to.be.a("string");
                })
                console.log("RESPONSE: " + response);
                done();
            })
    })
})