import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import '../Styles/Home.css'

const Home = () => {
    return (
        <div>
            <div class="logo-header">
                <img src="/images/BannerResize.png"
                    alt="QA Cinema banner"
                    class="logo-center" />
            </div>
            <br />
            <Container>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/AQP2.jpg"
                            alt="A Quiet Place 2 banner"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/ITH2.png"
                            alt="In The Heights banner"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/BW.jpg"
                            alt="Black Widow banner"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <br />
            <div class="text-colour">
                <Container>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="/images/premiumdecor.jpg" width="348" height="220" />
                            <Card.Body>
                                <Card.Title>QA Cinema</Card.Title>
                                <Card.Text>
                                    QA Cinema provides you with the latest, biggest films at afforable prices; With comfortable seating and reasonably priced food & drink to boot, what reason is there not to come spend an evening with us? Here at QACinema.com you can browse the latest films, those still to come, book tickets and find out more about us.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="/images/hire.jpeg" width="348" height="220" />
                            <Card.Body>
                                <Card.Title>Private hire!</Card.Title>
                                <Card.Text>
                                    Bothered by all the strange plebians in the cinema? Want to place some games on that big screen instead? Then consider hiring one of our screens privately for you and your friends, with prices starting from just £100!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="/images/safety.jpg" width="348" height="220" />
                            <Card.Body>
                                <Card.Title>Covid safety guidelines</Card.Title>
                                <Card.Text>
                                    As a result of the pandemic, we have set safety measures in place to help keep our customers safe, including numerous sanitising stations and socially distanced seating.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </div>
        </div>
    )
}

export default Home
