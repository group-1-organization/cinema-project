import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
    return (
        <Card bg="dark" className="mt-3">
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
    )
}

export default TopicCard
