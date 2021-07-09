import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

const Discussion = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [topics, setTopics] = useState([]);
    const [movieNames, setMovieNames] = useState([]);

    const [topicName, setTopicName] = useState('');
    const [movieName, setMovieName] = useState('');
    const [author, setAuthor] = useState('');

    const getTopics = () => {
        axios.get(`http://localhost:5000/cinema/topics`).then((response) => {
            setTopics(response.data);
            console.log(response.data);
        })
    }

    const getMovieNames = () => {
        axios.get(`http://localhost:5000/cinema/movies/titles`).then((response) => {
            setMovieNames(response.data);
        })
    }

    const handleClick = (event) => {
        event.preventDefault();

        const topic = { "name": topicName, "movieName": movieName, "author": author };

        axios.post(`http://localhost:5000/cinema/topics/`, topic).then((response) => {
            getTopics();
            setShow(false);
            setTopicName('');
            setMovieName('');
            setAuthor('');
        })
    }

    useEffect(() => getTopics(), []);

    useEffect(() => getMovieNames(), []);

    return (
        <Container>
            <h1>Discussion board</h1>

            <h3>Topics</h3>

            <Button variant="primary" onClick={handleShow}>
                Create topic
            </Button>
            {topics.map((topic, index) => (
                <Row key={index} className="mt-3">
                    <Col>
                        <Card bg="dark">
                            <Card.Header>{topic.movieName}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <Link to={`/topic/${topic._id}`}>
                                        <p>{topic.name}</p>
                                    </Link>
                                    <footer className="blockquote-footer">
                                        created {moment(topic.createdAt).fromNow()} by {topic.author}
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="topicForm">
                        <Form.Group controlId="topicNameInput">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control type="text" placeholder="Enter topic" value={topicName} onChange={(event) => setTopicName(event.target.value)} required pattern=".*\S+.*" title="This field is required" />
                        </Form.Group>

                        <Form.Group controlId="movieSelect">
                            <Form.Label>Movie</Form.Label>
                            <Form.Control as="select" value={movieName} onChange={(event) => { setMovieName(event.target.value) }} required>
                                <option value="" disabled selected>Select your option</option>
                                {movieNames.map((movieName, index) => (
                                    <option key={index}>{movieName.title}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="authorInput">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={author} onChange={(event) => setAuthor(event.target.value)} required pattern=".*\S+.*" title="This field is required" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="Submit" form="topicForm" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container >
    )
}

export default Discussion
