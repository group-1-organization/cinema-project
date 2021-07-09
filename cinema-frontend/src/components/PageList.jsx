import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './listings/Movie';
import { useState, useEffect } from 'react';
import axios from 'axios';
const PageList = () => {

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
            {movies.map((movie) => (
                <Route path={`/movie/${movie.title}`}>
                    <Movie movie={movie} />
                </Route>
            ))}
        </div>
    )
}

export default PageList;