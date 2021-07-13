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
    }, []);

    const getVenues = () => {
        axios.get("http://localhost:5000/cinema/venue").then((response) => {
            setVenue(response.data);
        }).catch((error) => {
            console.log(error);
        })
    };



    return (
        <div>
            <div className="page-header">
                <h1>Places to go</h1>
            </div>
            <br />

            <Container>

                <center>

                    <h6>
                        Here is just a few of the great local venues!
                    </h6>
                    <p>
                        <Link to={"/gettingthere"}><Button className="button-colour" >How to find us</Button></Link>
                    </p>
                </center>


                <Row xs={1} lg={3}>
                    {venue.map((venue) => (
                        <Venue venue={venue} />
                    ))}
                </Row>
            </Container >
        </div>

    );
}

export default Places;