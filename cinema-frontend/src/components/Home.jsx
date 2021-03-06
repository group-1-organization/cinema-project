import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../Styles/Home.css';

const Home = () => {
    return (
        <div>
            <div class="logo-header">
                <Image src="/images/BannerResize.png"
                    alt="QA Cinema banner"
                    class="logo-center" fluid />
            </div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <Image
                        className="d-block w-100"
                        src="/images/f9-banner.jpg"
                        alt="A Quiet Place 2 banner"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image
                        className="d-block w-100"
                        src="/images/bw-banner.jpg"
                        alt="In The Heights banner"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image
                        className="d-block w-100"
                        src="/images/sj-banner.jpg"
                        alt="Black Widow banner"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <Container>

                <Row>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                        <Card bg="dark" text="light" className="mt-4">
                            <Card.Img variant="top" src="/images/premiumdecor.jpg" width="348" height="220" />
                            <Card.Body>
                                <Card.Title>QA Cinema</Card.Title>
                                <Card.Text>
                                    QA Cinema provides you with the latest, biggest films at afforable prices; With comfortable seating and reasonably priced food & drink to boot, what reason is there not to come spend an evening with us? Here at QACinema.com you can browse the latest films, those still to come, book tickets and find out more about us.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                        <Card bg="dark" text="light" className="mt-4">
                            <Card.Img variant="top" src="/images/hire.jpeg" width="348" height="220" />
                            <Card.Body>
                                <Card.Title>Private hire!</Card.Title>
                                <Card.Text>
                                    Bothered by all the strange plebians in the cinema? Want to place some games on that big screen instead? Then consider hiring one of our screens privately for you and your friends, with prices starting from just ??100!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                        <Card bg="dark" text="light" className="mt-4">
                            <Card.Img variant="top" src="/images/safety.jpg" width="348" height="220" />
                            <Card.Body>
                                <Card.Title>Covid safety guidelines</Card.Title>
                                <Card.Text>
                                    As a result of the pandemic, we have set safety measures in place to help keep our customers safe, including numerous sanitising stations and socially distanced seating.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Home
