import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";



const ContactForm = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_07v1wh8', 'template_90xf9pe', e.target, 'user_IWUIlu8WypsMv1K5xDzV6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <div>
            <Form onSubmit={sendEmail}>
                <Form.Group>
                    <Form.Label>Please enter your email address:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Please enter your name:</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control placeholder="Subject" name="subject" type="text" required=
                        {true} />

                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                </Form.Group>
                <Button className="button-colour" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    );
}

export default ContactForm;