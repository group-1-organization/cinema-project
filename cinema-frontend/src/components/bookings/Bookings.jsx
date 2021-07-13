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




const Bookings = ({ time, title }) => {

    const [selectedMovie, setSelectedMovie] = useState('-');
    const [selectedTime, setSelectedTime] = useState('')
    const [selectName, setSelectName] = useState('');
    const [selectAdult, setSelectAdult] = useState(0);
    const [selectchild, setSelectChild] = useState(0);
    const [selectConsessions, setSelectConsessions] = useState(0);
    const [price, setPrice] = useState(0);
    const [booking, setBooking] = useState({});
    const [payed, setPayed] = useState(false);

    const [show, setShow] = useState(false);
    const [showProblem, setShowProblem] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseProblem = () => setShowProblem(false);
    const handleShowProblem = () => setShowProblem(true);


    console.log(selectedMovie);
    console.log(selectedTime);

    useEffect(() => {
        if (payed == true) {
            PayedSent();
        }

    }, [payed])


    const Booking = async () => {
        let Price = (parseInt(selectConsessions) * 9.00) + (parseInt(selectchild) * 8.50) + (parseInt(selectAdult) * 11.00);
        setPrice(Price);
        if (selectedMovie == '-' || selectedTime == '-' || selectName.length < 2 || selectAdult == 0 & selectchild == 0 & selectConsessions == 0) {
            handleShowProblem();
        } else {
            handleShow();
        }

    };

    const PayedSent = async () => {
        let booking = {
            movie: selectedMovie,
            screening: selectedTime,
            booker: selectName,
            adults: selectAdult,
            children: selectchild,
            concessions: selectConsessions,
            noOfSeats: parseInt(selectConsessions) + parseInt(selectchild) + parseInt(selectAdult)
        }
        booking.price = price;
        setBooking(booking);
        await axios.post("http://localhost:5000/cinema/bookings", booking).then((response) =>
            console.log(response));
        setPayed(false);
    }


    return (
        <div>
            <div className="page-header">
                <h1>Make a booking</h1>
            </div>

            <br />
            <Container>
                <div>
                    <p align="center">
                        <Link to={"/listing"}><Button className="button-colour adj-button" >See Movies and Showings Here </Button></Link>
                        <Link to={"/screens"}><Button className="button-colour" >View screens</Button></Link>
                    </p>


                </div>



                <Form id="Bookingform">
                    <Form.Group controlId="SelectMovie">
                        <Form.Label>Select a Movie</Form.Label>
                        <MovieList setSelectedMovie={setSelectedMovie} title={title} />
                    </Form.Group>

                    <Form.Group controlId="SelectTime">
                        <Form.Label>Select Time</Form.Label>
                        <ShowingsList selectedMovie={selectedMovie} setSelectedTime={setSelectedTime} time={time} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Name for the Booking</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" onChange={(e) => { setSelectName(e.target.value) }} />
                    </Form.Group>

                    <Form.Group controlId="Adult">
                        <Form.Label>Adults tickets £11.00</Form.Label>
                        <Form.Control type="Number" placeholder="0" onChange={(e) => { setSelectAdult(e.target.value) }} />
                    </Form.Group>

                    <Form.Group controlId="Children">
                        <Form.Label>Child tickets £8.50</Form.Label>
                        <Form.Control type="Number" placeholder="0" onChange={(e) => { setSelectChild(e.target.value) }} />
                    </Form.Group>

                    <Form.Group controlId="Concession">
                        <Form.Label>Concession tickets £9.00</Form.Label>
                        <Form.Control type="Number" placeholder="0" onChange={(e) => { setSelectConsessions(e.target.value) }} />
                    </Form.Group>
                    <Button className="button-colour" type="button" onClick={Booking} >Submit</Button>
                </Form>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select your payment method</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <center> Adults x{selectAdult}</center>
                        <center> Children x{selectchild}</center>
                        <center> Concession x{selectConsessions}</center>
                        <center>Total Price = £{price}</center>
                        <br />
                        <Payment setPayed={setPayed} booking={booking} price={price} closeModal={handleClose} />
                    </Modal.Body>
                </Modal>
                <Modal show={showProblem} onHide={handleCloseProblem}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter all Fields</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="primary" type="button" onClick={handleCloseProblem}> close</Button>
                    </Modal.Body>
                </Modal>

            </Container>

        </div >
    );
}

export default Bookings;