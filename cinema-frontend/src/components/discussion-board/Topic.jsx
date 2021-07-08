import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Filter = require('bad-words'),
    filter = new Filter();

const Topic = () => {

    const { id } = useParams();

    const [comments, setComments] = useState([]);

    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('')

    useEffect(() => {
        getComments();
    }, []);

    const getComments = () => {
        axios.get(`http://localhost:5000/cinema/comments/${id}`).then((response) => {
            setComments(response.data);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const comment = { "topicId": id, "author": filter.clean(author), "message": filter.clean(message) };

        console.log(comment);

        axios.post(`http://localhost:5000/cinema/comments/`, comment).then((response) => {
            getComments()
        })

        setAuthor('');
        setMessage('');
    }

    return (
        <Container>
            <h1>Topic</h1>
            <p>{id}</p>
            <Row>
                <Col>
                    <h3 className="border-bottom py-3">Comments</h3>

                    {comments.map((comment, index) => (
                        <div key={index} className="border-bottom m-3">
                            <Row>
                                <Col>
                                    <p>
                                        <strong>{comment.author}</strong>
                                    </p>
                                </Col>
                                <Col>
                                    <small className="float-right">{moment(comment.createdAt).fromNow()}</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                        {comment.message}
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="authorInput">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={author} onChange={(event) => setAuthor(event.target.value)} required pattern=".*\S+.*" title="This field is required" />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="commentTextarea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} required pattern=".*\S+.*" title="This field is required" />
                        </Form.Group>
                        <Button variant="primary" type="Submit" onSubmit={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Topic