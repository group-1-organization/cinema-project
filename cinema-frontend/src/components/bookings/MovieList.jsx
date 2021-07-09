import { useEffect, useState } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form'

const MovieList = ({ setSelectedMovie }) => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovies();

    }, []);


    const getMovies = async () => {
        await axios.get("http://localhost:5000/cinema/movies").then((response) => {
            setMovies(response.data);
            setLoaded(true);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        })
    };

    if (error) {
        return (<Form.Control as="select">
            <option> failed</option>
        </Form.Control>)
    } else if (!loaded) {
        return (<Form.Control as="select">
            <option> Select a Movie to See Times</option>
        </Form.Control>)
    } else {
        return (
            <Form.Control as="select" onChange={(e) => { setSelectedMovie(e.target.value) }}>
                <option>-</option>
                {
                    movies.map((movie) => {
                        return <option>{movie.title}</option>
                    })
                }
            </Form.Control >

        );
    }
}

export default MovieList;