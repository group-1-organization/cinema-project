import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";



const Bookings = () => {

    const [selectedMovie, setSelectedMovie] = useState('');
    const [times, setTimes] = useState([]);

    useEffect(() => {
        console.log(selectedMovie.toString());
        setTimes(Movieselected.showings);
        console.log(times);

    }, [selectedMovie])

    const Movieselected = {
        "_id": "60e4376ca5855b3fec4b256a",
        "actors": [
            "UPDATED",
            "updatethis2"
        ],
        "showings": [
            "18:00",
            "20:00"
        ],
        "title": "newtitle",
        "poster": "newposter",
        "director": "update this",
        "__v": 1
    }


    const movie = [{
        "_id": "60e4376ca5855b3fec4b256a",
        "actors": [
            "UPDATED",
            "updatethis2"
        ],
        "showings": [
            "18:00",
            "20:00"
        ],
        "title": "newtitle",
        "poster": "newposter",
        "director": "update this",
        "__v": 1
    }, {
        "_id": "60e4376ca5855b3fec4b256a",
        "actors": [
            "UPDATED",
            "updatethis2"
        ],
        "showings": [
            "18:00",
            "20:00"
        ],
        "title": "newtitle",
        "poster": "newposter",
        "director": "update this",
        "__v": 1
    }]

    return (
        <Container>
            <Jumbotron>
                <center>
                    <h1>Booking</h1>
                    <p>
                        Enter your details below to  get the relevent data
                    </p>
                    <p>
                        <Button variant="outline-dark" href="/gettingthere">Getting Here</Button>
                    </p>
                </center>

            </Jumbotron>
            <Form>
                <Form.Group controlId="SelectMovie">
                    <Form.Label>Select a Movie</Form.Label>
                    <Form.Control as="select" onChange={(e) => { setSelectedMovie(e.target.value) }}>
                        <option>Choose a Movie</option>
                        {movie.map((movie, key) => {
                            return <option key={key}>{movie.title}</option>
                        })}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="SelectMovie">
                    <Form.Label>Select Time</Form.Label>
                    <Form.Control as="select">
                        <option>Choose a Movie</option>
                        {times.map((showing) => {
                            return <option >{showing}</option>
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Name for the Booking</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="Adults">
                    <Form.Label>Adults tickets</Form.Label>
                    <Form.Control type="Number" placeholder="0" />
                </Form.Group>
                <Form.Group controlId="Children">
                    <Form.Label>Children tickets</Form.Label>
                    <Form.Control type="Number" placeholder="0" />
                </Form.Group>
                <Form.Group controlId="Concession">
                    <Form.Label>Concession tickets</Form.Label>
                    <Form.Control type="Number" placeholder="0" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

        </Container>
    );
}

export default Bookings;