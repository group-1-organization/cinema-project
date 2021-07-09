import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments';
import CommentForm from './CommentForm';
import RatingForm from './RatingForm';
import Rating from './Rating';

const Topic = () => {

    const { id } = useParams();
    const [topic, setTopic] = useState({})

    const [commentsLoaded, setCommentsLoaded] = useState(false);
    const [ratingLoaded, setRatingLoaded] = useState(false);

    const getTopic = async () => {
        await axios.get(`http://localhost:5000/cinema/topics/${id}`).then((response) => {
            setTopic(response.data);
            setCommentsLoaded(false);
            setRatingLoaded(false);
        })
    }

    useEffect(() => getTopic(), []);

    return (
        <Container>
            <h1>{topic.name}</h1>
            <p>{topic.movieName}</p>
            <Row>
                <Col>
                    <h3 className="border-bottom py-3">Ratings</h3>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <RatingForm topic={topic} setRatingLoaded={setRatingLoaded} />
                </Col>
                <Col md={6}>
                    <Rating topic={topic} ratingLoaded={ratingLoaded} setRatingLoaded={setRatingLoaded} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="border-bottom py-3">Comments</h3>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <CommentForm topic={topic} setCommentsLoaded={setCommentsLoaded} />
                </Col>
                <Col md={6}>
                    <Comments topic={topic} commentsLoaded={commentsLoaded} setCommentsLoaded={setCommentsLoaded} />
                </Col>
            </Row>
        </Container>
    )
}

export default Topic