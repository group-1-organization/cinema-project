import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';

const Listings = () => {

    const movies = [{
        "_id": "60e4376ca5855b3fec4b256a",
        "actors": [
            "UPDATED",
            "updatethis2"
        ],
        "showings": [
            "18:00",
            "20:00"
        ],
        "title": "newtitle",
        "poster": "newposter",
        "director": "update this"
    }, {
        "_id": "60e4376ca5854b3fec4b256a",
        "actors": [
            "UPDATED",
            "updatethis2"
        ],
        "showings": [
            "18:00",
            "20:00"
        ],
        "title": "newtitle",
        "poster": "newposter",
        "director": "update this"
    }];

    console.log(movies)

    return (
        <Container>
            <h1>Listings page</h1>

            <Row className="border-bottom"></Row>
            {movies.map((movie) => (
                <Movie movie={movie} />
            ))}
        </Container>
    )
}

export default Listings
