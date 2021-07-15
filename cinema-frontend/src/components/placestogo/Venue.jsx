import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"




const Venue = ({ venue }) => {

    return (
        <Col className="mt-4">
            <Card className="h-100" bg="dark">
                <Card.Img variant="top" src={`/images/${venue.picture}`} alt={venue.picture} style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Title>{venue.name}</Card.Title>
                    <Card.Text>
                        {venue.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="bg-dark">Opening Times: {venue.opening}</ListGroupItem>
                    <ListGroupItem className="bg-dark">Offers: {venue.offer}</ListGroupItem>
                    <ListGroupItem className="bg-dark">Contact Number: {venue.contact}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>

    )
}

export default Venue;