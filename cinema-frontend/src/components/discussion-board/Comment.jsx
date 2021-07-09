import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Comment = ({ comment }) => {
    return (
        <div className="border-bottom m-3">
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
    )
}

export default Comment
