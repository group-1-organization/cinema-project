import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

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

    return (

        <div>
            <div className="page-header">
                <h1>Listings page</h1>
            </div>
            <br />
            <Container>


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
        </div>
    )
}
export default Listings;
