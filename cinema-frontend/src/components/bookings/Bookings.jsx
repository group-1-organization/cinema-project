import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Modal from 'react-bootstrap/Modal'
import axios from "axios"
import { Link } from 'react-router-dom';

import ShowingsList from "./ShowingsList";
import MovieList from "./MovieList";
import Payment from "./Payment";



const Bookings = () => {

    const [selectedMovie, setSelectedMovie] = useState('-');
    const [selectedTime, setSelectedTime] = useState('')
    const [selectName, setSelectName] = useState('');
    const [selectAdult, setSelectAdult] = useState(0);
    const [selectchild, setSelectChild] = useState(0);
    const [selectConsessions, setSelectConsessions] = useState(0);
    const [price, setPrice] = useState(0);
    const [booking, setBooking] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Booking = async () => {
        if (selectedMovie == '-') {
            console.log("select a movie");
        } else {
            let booking = {
                movie: selectedMovie,
                screening: selectedTime,
                booker: selectName,
                adults: selectAdult,
                children: selectchild,
                concessions: selectConsessions,
                noOfSeats: parseInt(selectConsessions) + parseInt(selectchild) + parseInt(selectAdult)
            }
            let Price = (parseInt(selectConsessions) * 9.00) + (parseInt(selectchild) * 8.50) + (parseInt(selectAdult) * 9.00);
            setPrice(Price);
            booking.price = price;
            setBooking(booking);
            await axios.post("http://localhost:5000/cinema/bookings", booking).then((response) =>
                console.log(response));
            handleShow();
        }

    };

    return (
        <Container>
            <Jumbotron>
                <center>
                    <h1>Booking</h1>
                    <p>
                        Enter your details below to get the relevent data inputs to book
                    </p>
                    <p>
                        <Link to={"/listing"}><Button variant="outline-dark" >See Movies and Showings Here</Button></Link>
                    </p>
                </center>
            </Jumbotron>
            <Form id="Bookingform">
                <Form.Group controlId="SelectMovie">
                    <Form.Label>Select a Movie</Form.Label>
                    <MovieList setSelectedMovie={setSelectedMovie} />
                </Form.Group>

                <Form.Group controlId="SelectTime">
                    <Form.Label>Select Time</Form.Label>
                    <ShowingsList selectedMovie={selectedMovie} setSelectedTime={setSelectedTime} />
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Name for the Booking</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" onChange={(e) => { setSelectName(e.target.value) }} />
                </Form.Group>

                <Form.Group controlId="Adult">
                    <Form.Label>Adults tickets</Form.Label>
                    <Form.Control type="Number" placeholder="0" onChange={(e) => { setSelectAdult(e.target.value) }} />
                </Form.Group>

                <Form.Group controlId="Children">
                    <Form.Label>Child tickets</Form.Label>
                    <Form.Control type="Number" placeholder="0" onChange={(e) => { setSelectChild(e.target.value) }} />
                </Form.Group>

                <Form.Group controlId="Concession">
                    <Form.Label>Concession tickets</Form.Label>
                    <Form.Control type="Number" placeholder="0" onChange={(e) => { setSelectConsessions(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={Booking} >Submit</Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select your payment method</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Payment booking={booking} price={price} closeModal={handleClose} />
                </Modal.Body>
            </Modal>

        </Container>
    );
}

export default Bookings;