const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const Comment = require('../models/Comment');

describe(`Comments testing`, () => {

    before(async () => {
        let deleteTest = Comment({
            "topicId": "60ed7a4e1c58f2564c86a39e",
            "message": "testing testing",
            "author": "deleteTest"
        })

        let updateTest = Comment({
            "topicId": "60ed7a4e1c58f2564c86a39e",
            "message": "testing testing",
            "author": "updateTest"
        })
        await deleteTest.save();
        await updateTest.save();
    })

    after(() => {
        Comment.deleteMany({ 'author': 'createTest' }, function (err) {
            if (err) return handleError(err);
        });

        Comment.deleteMany({ 'author': 'updateTest' }, function (err) {
            if (err) return handleError(err);
        });
    });

    it(`should create a comment`, (done) => {
        chai.request(app).post('/cinema/comments').send({
            "topicId": "60ed7a4e1c58f2564c86a39e",
            "message": "testing testing",
            "author": "createTest"
        }).end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const comment = response.body;
            expect(comment).to.be.a("object");
            expect(comment).to.contain.keys("author");
            expect(comment.author).to.be.a("string");
            expect(comment.author).to.equal("createTest");
            done();
        })
    })

    it(`should find all comments in a topic by topic id`, (done) => {
        chai.request(app).get('/cinema/comments/60ec35f6979e3a30b410e199').end((error, response) => {
            if (error) {
                console.log(`Something went wrong`);
                done(error);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            const body = response.body;
            body.map((comment) => {
                expect(comment).to.be.a("object");
                expect(comment).to.contain.keys("topicId");
                expect(comment.topicId).to.be.a("string");
                expect(comment.topicId).to.equal("60ec35f6979e3a30b410e199");
            })
        })
        done();
    })

    it(`should update the comment in the db`, (done) => {
        Comment.findOne(
            { 'author': 'updateTest' }, (err, comment) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).patch(`/cinema/comments/${comment._id}`).send({ "message": "the message has been updated" }).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response).to.not.be.null;
                        const comment = response.body;
                        expect(comment).to.be.a("object");
                        expect(comment).to.contain.keys("author");
                        expect(comment.author).to.be.a("string");
                        expect(comment.author).to.equal("updateTest");
                        expect(comment).to.contain.keys("message");
                        expect(comment.message).to.be.a("string");
                        expect(comment.message).to.equal("the message has been updated");
                        done();
                    })
                }
            })
    })

    it(`should delete the comment in the db`, (done) => {
        Comment.findOne(
            { 'author': 'deleteTest' }, (err, comment) => {
                if (err) {
                    console.error('An error occurred:', err);
                } else {
                    chai.request(app).delete(`/cinema/comments/${comment._id}`).end((error, response) => {
                        if (error) {
                            console.log(`Something went wrong`);
                            done(error);
                        }
                        expect(response).to.have.status(200);
                        expect(response.text).to.equal(`Comment by ${comment.author} at ${comment.createdAt} deleted`);
                        expect(response).to.not.be.null;
                        done();
                    })
                }
            })
    })
})