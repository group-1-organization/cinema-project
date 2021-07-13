import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/esm/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import '../App.css';

const AboutUs = () => {
    return (
        <div>
            <center className="page-header">
                <h1>About Us</h1>
            </center>
            <Container className="mt-4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Amandeep</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">James</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Richard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Scott</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    Amandeep is a QA consultant with a hurt thumb who rules us with and iron fist, he is a good leader and i dont have a gun to my head i promise
                                    <center>
                                        <Button className="button-colour adj-button" href="https://github.com/AmanBassi" target="_blank">GitHub</Button>
                                        <Button className="button-colour" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    James is a QA consultant who is the gerneral of our forces, he has won may battles against our sworn enemies the Autobots, james is also known a Star Scream
                                    <center>
                                        <Button className="button-colour adj-button" href="https://github.com/JamesBarnett44" target="_blank">GitHub</Button>
                                        <Button className="button-colour" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Richard is a QA consultant with a face that looks like a scottish singer or some Edsel said who knowns if this is true but he is unhappy that its a scottish one
                                    <center>
                                        <Button className="button-colour adj-button" href="https://github.com/sgtnamder" target="_blank">GitHub</Button>
                                        <Button className="button-colour" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    Scott is a Sad and Sexy man with deep and long relationship with kevin... "Kevin sits daydreaming at his computer, thinking about Scott in those cute kittycat ears. It was last evening when Kevin brought those doggy biscuits and seductively ate them off his toes. He is brought to a rude awakening when he hears Scott scream "Kevin is a feeder". He reaches under the desk and grabs a pack of dog biscuits. It's feeding time..."
                                    <center>
                                        <Button className="button-colour adj-button" href="https://github.com/Diakoptes24" target="_blank">GitHub</Button>
                                        <Button className="button-colour" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            <Container>
                <Image src="AboutUS.png" style={{ "width": "100%" }} />
            </Container>
            <Container>
                <center>
                    <p>If you want to contact us directly you can do so using the Contact Page or follow the link below</p>
                    <p>Any feedback is welcomed</p>
                    <Link to={"/contact"}><Button className="button-colour">Contact Us</Button></Link>
                </center>


            </Container>


        </div>
    );
}

export default AboutUs;