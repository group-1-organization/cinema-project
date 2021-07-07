import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Discussion = () => {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [topics, setTopics] = useState([]);

    const getTopics = () => {
        axios.get(`http://localhost:5000/cinema/topics`).then((response) => {
            setLoaded(true);
            setTopics(response.data);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        })
    }

    const handleClick = (event) => {
        let id = event.target.getAttribute("topicid");

    }

    useEffect(() => getTopics(), []);

    return (
        <Container>
            <h1>Discussion board</h1>

            <h3>Topics</h3>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Movie</th>
                        <th>Author</th>
                        <th className="w-0"></th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => (
                        <tr>
                            <td>{topic.name}</td>
                            <td>{topic.movie}</td>
                            <td>{topic.author}</td>
                            <td>
                                <Link to={`/topic/${topic._id}`}>
                                    <Button variant="primary">
                                        Open
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Discussion
