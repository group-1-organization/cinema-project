import { useEffect, useState } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form'

const MovieList = ({ setSelectedMovie, title }) => {
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
        console.log(error);
        return (<Form.Control as="select">
            <option> failed</option>
        </Form.Control>)
    } else if (!loaded) {
        return (<Form.Control as="select">
            <option> Select a Movie to See Times</option>
        </Form.Control>)
    } else {
        console.log(title);
        return (
            <Form.Control as="select" defaultValue={title} onLoad={setSelectedMovie(title)} onChange={(e) => { setSelectedMovie(e.target.value) }}>
                <option>-</option>
                {movies.map((movies, i) => {
                    if (movies.title == title) {
                        return (
                            <option selected key={i} >{movies.title}</option>
                        )
                    } else {
                        return (
                            < option key={i} > {movies.title}</option>
                        )
                    };
                })}

            </Form.Control >
        )
    }
}

export default MovieList;