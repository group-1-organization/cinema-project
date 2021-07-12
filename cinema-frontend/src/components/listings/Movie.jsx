import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom/Link';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Showings from './Showings';

const Movie = ({ setTime, setTitle }) => {

    const { title } = useParams();
    const [movie, setMovie] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [actors, setActors] = useState(["a1", "a2"]);
    const [showings, setShowings] = useState(["a1", "a2"]);
    const [poster, setPoster] = useState("");


    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        await axios.get(`http://localhost:5000/cinema/movies/name/${title}`).then((response) => {
            setLoaded(true);
            setActors(response.data[0].actors);
            setShowings(response.data[0].showings);
            setPoster(response.data[0].poster);
            setMovie(response.data[0]);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
            console.log(error);
        })
    };

    if (error) {
        return (
            <p>error</p>
        );
    } else if (!loaded) {
        return (<p>loading...</p>);
    } else {
        return (
            <Container>
                <Row className="mt-3">
                    <Col md={6}>
                        <Image src={`/${poster}`} alt={poster} fluid />
                    </Col>
                    <Col md={6}>
                        <h3>{movie.title}</h3>
                        <p>
                            Actors : {actors.map((actor, index) => (
                                <span key={index}> {actor} | </span>
                            ))}
                        </p>
                        <p>
                            Director : {movie.director}
                        </p>
                        <div>
                            {showings.map((showing) => (
                            <Showings showing={showing} movie={movie} setTime={setTime} setTitle={setTitle} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Movie
