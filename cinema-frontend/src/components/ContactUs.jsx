import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import '../Styles/ContactUs.css'
import '../App.css'

const ContactUs = () => {
    return (
        <div>
            <div class="page-header">
                <h1>Contact Us</h1>
            </div>
            <br />
            <Container>
                <Row>
                    <Col>
                        <h4>You can contact us via email using this form:</h4>
                        <ContactForm />
                    </Col>
                    <Col className="center">
                        <Card border="primary" style={{ width: '18rem' }} >
                            <Card.Header><h4 className="font-colour">Alternatively, you can contact us by post at this address:</h4></Card.Header>
                            <Card.Body>
                                <Card.Text className="font-colour">
                                    Bentley Bridge Park
                                    <br />
                                    Wednesfield Way
                                    <br />
                                    Wolverhampton
                                    <br />
                                    V11 1TZ
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactUs;