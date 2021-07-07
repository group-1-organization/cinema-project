import { useEffect, useState } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form'




const ShowingsList = ({ selectedMovie, setSelectedTime }) => {
    const [movieTitle, setMovieTitle] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);


    console.log(selectedMovie);

    const getMoviesByName = (() => {
        axios.get("http://localhost:5000/cinema/movies/name/" + selectedMovie).then((response) => {
            console.log(response.data[0].showings);
            setLoaded(true);
            setMovieTitle(response.data[0].showings);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        })
    })

    useEffect(() => {
        if (selectedMovie != '-') {
            getMoviesByName();
        }
    }, [selectedMovie])


    if (error) {
        return (<Form.Control as="select">
            <option> failed</option>
        </Form.Control>)
    } else if (!loaded) {
        return (<Form.Control as="select">
            <option> Select a Movie to See Times</option>
        </Form.Control>)
    } else {
        console.log(movieTitle);
        return (
            <Form.Control as="select" onChange={(e) => { setSelectedTime(e.target.value) }}>
                <option>-</option>
                {movieTitle.map((shows, i) => {
                    return (
                        <option key={i}>{shows}</option>
                    );
                })}
            </Form.Control>
        )
    }
}

export default ShowingsList;