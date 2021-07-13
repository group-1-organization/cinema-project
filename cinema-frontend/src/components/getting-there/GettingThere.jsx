import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const { apiKey } = require('../../const.json');

const GettingThere = () => {
    return (
        <div>
            <div className="page-header">
                <h1>How to find us</h1>
            </div>
            <br />
            <Container>
                <Row>
                    <Col md={6} className="mt-4">
                        <Card bg="dark">
                            <Card.Img variant="top" src="/images/cinema.jpg" />
                        </Card>
                    </Col>
                    <Col md={6} className="mt-4">
                        <Card bg="dark">
                            <Card.Img variant="top" src="/images/cineworld-outside.jpg" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mt-4">
                        <Card bg="dark">
                            <Card.Body>
                                <Card.Title>Address</Card.Title>
                                <Card.Text>
                                    Bentley Bridge Park <br />
                                    Wednesfield Way <br />
                                    Wolverhampton <br />
                                    WV11 1TZ
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-4">
                        <Card bg="dark">
                            <Card.Body>
                                <Card.Title>Directions</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Bus</Card.Subtitle>
                                <Card.Text>
                                    Buses 59, 561, 562, 613 stop near the cinema. There are also the 69, 89, 25 and 28 lines from the bus station.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Train</Card.Subtitle>
                                <Card.Text>
                                    Nearest station Wolverhampton. Take bus from bus station close by.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-4">
                        <Card bg="dark">
                            <Card.Body>
                                <Card.Title>Parking</Card.Title>
                                <Card.Text>
                                    Free parking available is available nearby the cinema.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4">
                        <Card bg="dark">
                            <Card.Body>
                                <Card.Title>Map</Card.Title>
                                <div style={{ height: '650px', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: apiKey }}
                                        defaultCenter={{
                                            lat: 52.596324,
                                            lng: -2.092680
                                        }}
                                        defaultZoom={17} >
                                        <Marker
                                            lat={52.596324}
                                            lng={-2.092680}
                                            text="QA Marker" />
                                    </GoogleMapReact>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default GettingThere
