import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {

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
                <Row key={movie._id} className="border-bottom py-3">
                    <img src={`/${movie.poster}`} width="400" height="500" alt={movie.poster} />
                </Row>
                <Row>
                    <Col sm={9} md={10}>
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
                                <Button className="mr-3" variant="primary">{showing}</Button>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Movie
