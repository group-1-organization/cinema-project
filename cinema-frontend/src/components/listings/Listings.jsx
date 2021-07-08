import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Listings = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);


    const getMovies = async () => {
        await axios.get("http://localhost:5000/cinema/movies").then((response) => {
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
                <Movie movie={movie} />
            ))}
        </Container>
    )
}

export default Listings
