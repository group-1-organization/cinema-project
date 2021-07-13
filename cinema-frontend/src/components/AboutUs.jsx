import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/esm/Nav';
import Button from 'react-bootstrap/Button';
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
                                        <Button variant="outline-dark" href="https://github.com/AmanBassi" target="_blank">GitHub</Button>
                                        <Button variant="outline-dark" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    James is a QA consultant who is the gerneral of our forces, he has won may battles against our sworn enemies the Autobots, james is also known a Star Scream
                                    <center>
                                        <Button variant="outline-dark" href="https://github.com/JamesBarnett44" target="_blank">GitHub</Button>
                                        <Button variant="outline-dark" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Richard is a QA consultant with a face that looks like a scottish singer or some Edsel said who knowns if this is true but he is unhappy that its a scottish one
                                    <center>
                                        <Button variant="outline-dark" href="https://github.com/sgtnamder" target="_blank">GitHub</Button>
                                        <Button variant="outline-dark" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    Scott is a Sad and Sexy man with deep and long relationship with kevin... "Kevin sits daydreaming at his computer, thinking about Scott in those cute kittycat ears. It was last evening when Kevin brought those doggy biscuits and seductively ate them off his toes. He is brought to a rude awakening when he hears Scott scream "Kevin is a feeder". He reaches under the desk and grabs a pack of dog biscuits. It's feeding time..."
                                    <center>
                                        <Button variant="outline-dark" href="https://github.com/Diakoptes24" target="_blank">GitHub</Button>
                                        <Button variant="outline-dark" href="https://www.qa.com/" target="_blank">Company</Button>
                                    </center>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            <Container>
                <center>
                    <p>If you want to contact us directly you can do so using the Contact Page or follow the link below</p>
                    <p>Any Feedback is Welcomed</p>
                    <Link to={"/contact"}><Button >Contact Us</Button></Link>
                </center>
            </Container>
            <center className="page-header">
                <h2>SCRUM</h2>
            </center>
            <br />
            <br />
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="consistent-height">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">What Is SCRUM?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Implimentaion</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Find Out More</Nav.Link>
                                </Nav.Item>
                                <br />
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    Scrum gets its name from Rugby - where a team tries to go the distance as a unit, passing the ball back and forth.
                                    It is Lightweight and Simple to understand but Difficult to master.
                                    The scrum framework is iteritive and will produce a potentially shippable increment at the end of every sprint. A potentially shippable increment means that it will add functionality on what was there previously, therefore adding value. The additional code should be "shippable" (it shouldn't be half broken, it should be ready to distribute).
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    During this project, we used Jira to implement our SCRUM. We split the
                                    project into stories and tasks at the start of our project to ensure that all aspects of the project were covered, then each of these tasks/stories would be placed into an appropriate epic, for organisation. Then each of the tasks/stories was given a description, story points, and priorities based on the feedback from the team, these are then organized into sprints each week, and tasks were talked about and checkout out into in progress by each member. Git what integrated into our scrum to ensure that we would know if it had been merged or not and therefore could be placed into done.
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Scrum.org, the Home of Scrum, was founded by Scrum co-creator Ken Schwaber as a mission-based organization to help people and teams solve complex problems. They do this by enabling people to apply Professional Scrum through training courses, certifications and ongoing learning all based on a common competency model.</p>
                                    <center><a href="https://www.scrum.org/" target="_blank">www.scrum.org</a></center>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>


        </div>
    );
}

export default AboutUs;