import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NewMovie from './NewMovie';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../App.css';


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
        <div>
            <div className="page-header">
                <h1>Listings page</h1>
            </div>
            <br />
            <Container>


                {/* <Row className="border-bottom"></Row> */}
                {movies.map((movie) => (
                    <NewMovie movie={movie} />
                ))}
            </Container>
        </div>
    )
}

export default NewListings
