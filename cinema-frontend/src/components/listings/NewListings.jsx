import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

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
            <h1>Upcoming listings page</h1>

            <Row xs={1} sm={3} lg={4}>
                {movies.map((movie, i) => (
                    <Col key={i} className="mt-4">
                        <Link to={`/movie/${movie.title}`}>
                            <Image src={movie.poster} fluid />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default NewListings
