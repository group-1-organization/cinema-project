const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Topic = require('../models/Topic');

describe(`Topics testing`, () => {

    after(() => {
        Topic.deleteMany({ "name": "test topic" }, function (err) {
            if (err) return handleError(err);
        });
    });

    it(`should create a topic`, (done) => {
        chai.request(app).post('/cinema/topics').send({
            "name": "test topic",
            "movieName": "testmovie",
            "author": "James",
            "createdAt": "2021-07-12T12:30:46.369Z",
            "updatedAt": "2021-07-12T12:30:46.369Z",
        }).end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const topic = response.body;
            expect(topic).to.be.a("object");
            expect(topic).to.contain.keys("name");
            expect(topic.name).to.be.a("string");
            done();
        })
    })

    it(`should get all topics`, (done) => {
        chai.request(app).get('/cinema/topics').end((error, response) => {
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

    it(`should find a topic by id`, (done) => {
        chai.request(app).get('/cinema/topics/60ec35f6979e3a30b410e199').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const topic = response.body;
            expect(topic).to.be.a("object");
            expect(topic).to.contain.keys("name");
            expect(topic.name).to.be.a("string");
        })
        done();
    })
})