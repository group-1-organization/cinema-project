import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import axios from "axios"

import ShowingsList from "./ShowingsList";
import MovieList from "./MovieList"



const Bookings = () => {

    const [selectedMovie, setSelectedMovie] = useState('-');
    const [selectedTime, setSelectedTime] = useState('')
    const [selectName, setSelectName] = useState('');
    const [selectAdult, setSelectAdult] = useState(0);
    const [selectchild, setSelectChild] = useState(0);
    const [selectConsessions, setSelectConsessions] = useState(0);
    const [price, setPrice] = useState(0);
    const [booking, setBooking] = useState({});

    useEffect(() => {
        console.log(selectedTime);
    }, [selectedTime])




    const Booking = async () => {
        let booking = {
            movie: selectedMovie,
            screening: selectedTime,
            booker: selectName,
            adults: selectAdult,
            children: selectchild,
            concessions: selectConsessions,
            noOfSeats: parseInt(selectConsessions) + parseInt(selectchild) + parseInt(selectAdult)


        }
        setBooking(booking);
        await axios.post("http://localhost:5000/cinema/bookings", booking).then((response) =>
            console.log(response));

        let Price = (parseInt(selectConsessions) * 9.00) + (parseInt(selectchild) * 8.50) + (parseInt(selectAdult) * 9.00);
        setPrice(Price);


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
                        <Button variant="outline-dark" href="/listing">See Movies and Showings Here</Button>
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
            {/* <Payment booking={booking} price={price} /> */}
        </Container>
    );
}

export default Bookings;