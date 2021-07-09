import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Filter = require('bad-words'), filter = new Filter();

const CommentForm = ({ topic, setCommentsLoaded }) => {

    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        const comment = { "topicId": topic._id, "author": filter.clean(author), "message": filter.clean(message) };

        axios.post(`http://localhost:5000/cinema/comments/`, comment).then((response) => {
            setCommentsLoaded(false);
            setAuthor('');
            setMessage('');
        })
    }

    return (
        <Form>
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
            <Button variant="primary" type="Submit" onClick={handleClick}>
                Submit
            </Button>
        </Form>
    )
}

export default CommentForm
