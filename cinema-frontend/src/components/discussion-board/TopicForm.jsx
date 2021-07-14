import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const TopicForm = ({ setTopicsLoaded }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [movieNames, setMovieNames] = useState([]);

    const [topicName, setTopicName] = useState('');
    const [movieName, setMovieName] = useState('');
    const [author, setAuthor] = useState('');

    const getMovieNames = () => {
        axios.get(`http://localhost:5000/cinema/movies/titles`).then((response) => {
            setMovieNames(response.data);
        })
    }

    const handleClick = (event) => {
        event.preventDefault();

        const topic = { "name": topicName, "movieName": movieName, "author": author };

        axios.post(`http://localhost:5000/cinema/topics/`, topic).then((response) => {
            setTopicsLoaded(false);
            setShow(false);
            setTopicName('');
            setMovieName('');
            setAuthor('');
        })
    }

    useEffect(() => getMovieNames(), []);

    return (
        <>
            <Button className="button-colour" onClick={handleShow}>
                Create topic
            </Button>

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
        </>
    )
}

export default TopicForm
