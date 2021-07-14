const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Topic = require('../models/Topic');

describe(`Topics testing`, () => {

    before(async () => {
        let deleteTest = Topic({
            "name": "test topic",
            "movieName": "testmovie",
            "author": "deleteTest",
        })

        let updateTest = Topic({
            "name": "test topic",
            "movieName": "testmovie",
            "author": "updateTest",
        })
        await deleteTest.save();
        await updateTest.save();
    })

    after(() => {
        Topic.deleteMany({ 'author': 'createTest' }, function (err) {
            if (err) return handleError(err);
        });

        Topic.deleteMany({ 'author': 'updateTest' }, function (err) {
            if (err) return handleError(err);
        });
    });

    it(`should create a topic`, (done) => {
        chai.request(app).post('/cinema/topics').send({
            "name": "test topic",
            "movieName": "testmovie",
            "author": "createTest"
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

    it(`should update the topic in the db`, (done) => {
        Topic.findOne(
            { 'author': 'updateTest' }, (err, topic) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).patch(`/cinema/topics/${topic._id}`).send(
                        {
                            "name": "the name has been updated",
                            "movieName": "newmovie",
                        }).end((error, response) => {
                            if (error) {
                                console.log(`Something went wrong`);
                                done(error);
                            }
                            expect(response).to.have.status(200);
                            expect(response).to.not.be.null;
                            const topic = response.body;
                            expect(topic).to.be.a("object");
                            expect(topic).to.contain.keys("author");
                            expect(topic.author).to.be.a("string");
                            expect(topic.author).to.equal("updateTest");
                            expect(topic).to.contain.keys("name");
                            expect(topic.name).to.be.a("string");
                            expect(topic.name).to.equal("the name has been updated");
                            done();
                        })
                }
            })
    })

    it(`should delete the topic in the db`, (done) => {
        Topic.findOne(
            { 'author': 'deleteTest' }, (err, topic) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).delete(`/cinema/topics/${topic._id}`).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response.text).to.equal(`Topic ${topic.name} created by ${topic.author} at ${topic.createdAt} deleted`);
                        expect(response).to.not.be.null;
                        done();
                    })
                }
            })
    })
})