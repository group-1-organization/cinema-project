import { useEffect, useState } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form'

const ShowingsList = ({ selectedMovie, setSelectedTime, time }) => {
    const [movieTime, setMovieTime] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const getMoviesByName = (() => {
        axios.get("http://localhost:5000/cinema/movies/name/" + selectedMovie).then((response) => {
            setLoaded(true);
            setMovieTime(response.data[0].showings);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
            console.log(error)
        })
    })

    useEffect(() => {
        setSelectedTime(time)
    }, [])

    useEffect(() => {
        if (selectedMovie !== '-') {
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
        return (
            <Form.Control as="select" defaultValue={time} onChange={(e) => { setSelectedTime(e.target.value) }}>
                <option>Select a Time</option>
                {movieTime.map((shows, i) => {
                    if (shows === time) {
                        return (
                            <option selected key={i} > {shows}</option>
                        )
                    } else {
                        return (
                            < option key={i} > {shows}</option>
                        )
                    };
                })}
            </Form.Control >
        )
    }
}

export default ShowingsList;