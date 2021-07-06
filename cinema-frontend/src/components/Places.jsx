import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"



const Places = () => {
    return (

        <Container>
            <Jumbotron>
                <center>
                    <h1>Places to Go</h1>
                    <p>
                        A few local restraunts and Services close by, Check them out!!!
                    </p>
                    <p>
                        <Button variant="outline-dark" href="/gettingthere">Getting Here</Button>
                    </p>
                </center>

            </Jumbotron>
            <Row xs={1} lg={3}>
                <Col className="mt-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src="KFC.jpg" style={{ width: "100%" }} />
                        <Card.Body>
                            <Card.Title>KFC</Card.Title>
                            <Card.Text>
                                KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Opening Times: 9.00 - 10.30</ListGroupItem>
                            <ListGroupItem>Offers: N/A</ListGroupItem>
                            <ListGroupItem>Contact Number: 0344 800 2400</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col className="mt-4">

                    <Card className="h-100">
                        <Card.Img variant="top" src="5 Guys.jpg" style={{ width: "100%" }} />
                        <Card.Body>
                            <Card.Title>5 Guys</Card.Title>
                            <Card.Text>
                                Five Guys Enterprises LLC is an American fast casual restaurant chain focused on hamburgers, hot dogs, and French fries
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Opening Times: 11.00 - 10.30</ListGroupItem>
                            <ListGroupItem>Offers: 2 for 1 Meals</ListGroupItem>
                            <ListGroupItem>Contact Number: 0344 800 2400</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col className="mt-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src="FandB.jpg" style={{ width: "100%" }} />
                        <Card.Body>
                            <Card.Title>Frankie and Benny's</Card.Title>
                            <Card.Text>
                                Frankie & Benny's is a chain of Italian-American-themed restaurants in the United Kingdom run by The Restaurant Group.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Opening Times: 11.00 - 10.30</ListGroupItem>
                            <ListGroupItem>Offers: 25% off with any</ListGroupItem>
                            <ListGroupItem>Contact Number: 0344 800 2400</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col className="mt-4">

                    <Card className="h-100">
                        <Card.Img variant="top" src="MCD.jpg" style={{ width: "100%" }} />
                        <Card.Body>
                            <Card.Title>KFC</Card.Title>
                            <Card.Text>
                                McDonald's (MCD) is a fast food, limited service restaurant with more than 35,000 restaurants in over 100 countries.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Opening Times: 8.00 - 1.00</ListGroupItem>
                            <ListGroupItem>Offers: N/A</ListGroupItem>
                            <ListGroupItem>Contact Number: 0344 800 2400</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col className="mt-4">

                    <Card className="h-100">
                        <Card.Img variant="top" src="bowling.jpg" style={{ width: "100%" }} />
                        <Card.Body>
                            <Card.Title>HollyWood Bowl</Card.Title>
                            <Card.Text>
                                Hollywood Bowl Bracknell is part of The Hollywood Bowl Group; the UKs best ten pin bowling alley packed with bowling fun, arcades, food, drink and activities!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Opening Times: 11.00 - 12.30</ListGroupItem>
                            <ListGroupItem>Offers: N/A</ListGroupItem>
                            <ListGroupItem>Contact Number: 0344 800 2400</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container >

    );
}

export default Places;