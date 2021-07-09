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
    const [poster, setPoster] = useState("");

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        await axios.get(`http://localhost:5000/cinema/movies/name/${title}`).then((response) => {
            // http://localhost:5000/cinema/movies/name/Fast & Furious 9
            setLoaded(true);
            setActors(response.data[0].actors);
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
                <img src="f9.jpg" alt="test" />
                <Row key={movie._id} className="border-bottom py-3">
                    <img src={movie.poster} alt="movie poster" />
                    {/* <img src="https://imd.mini.icom.museum/wp-content/uploads/sites/54/2021/01/IMD_2021_POSTER_EN-683x1024.jpg" alt="movie poster" /> */}
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
                        {/* <div>
                            {movie.showings.map((showing) => (
                                <Button className="mr-3" variant="primary">{showing}</Button>
                            ))}
                        </div> */}
                    </Col>
                </Row>
            </Container>

        )
    }

}

export default Movie
