import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NewMovie from './NewMovie';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const NewListings = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);


    const getMovies = async () => {
        await axios.get("http://localhost:5000/cinema/newmovies").then((response) => {
            setMovies(response.data);
        }).catch((error) => {
            console.log(error);
        })
    };

    console.log(movies)

    return (
        <Container>
            <h1>Listings page</h1>

            <Row className="border-bottom"></Row>
            {movies.map((movie) => (
                <NewMovie movie={movie} />
            ))}
        </Container>
    )
}

export default NewListings
