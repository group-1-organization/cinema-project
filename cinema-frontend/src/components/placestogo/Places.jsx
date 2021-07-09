import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

import Venue from "./Venue"



const Places = () => {
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        getVenues();
    });

    const getVenues = () => {
        axios.get("http://localhost:5000/cinema/venue").then((response) => {
            setVenue(response.data);
            console.log(response.data);
            console.log(venue);
        }).catch((error) => {
            console.log(error);
        })
    };



    return (

        <Container>
            <Jumbotron>
                <center>
                    <h1>Places to Go</h1>
                    <p>
                        A few local restraunts and Services close by, Check them out!!!
                    </p>
                    <p>
                        <Link to={"/gettingthere"}><Button variant="outline-dark" >Getting Here</Button></Link>
                    </p>
                </center>

            </Jumbotron>
            <Row xs={1} lg={3}>
                {venue.map((venue) => (
                    <Venue venue={venue} />
                ))}
            </Row>
        </Container >

    );
}

export default Places;