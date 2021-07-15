import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const NewMovie = ({ movie }) => {
    return (
        <Row key={movie._id} className="border-bottom py-3">
            <Col xs={4} sm={3} md={2} fuild>
                <Image src={movie.poster} alt={movie.poster} fluid />
            </Col>
            <Col sm={9} md={10}>
                <h3>{movie.title}</h3>
                <p>
                    Actors : {movie.actors.map((actor, index) => (
                        <span key={index}> {actor} | </span>
                    ))}
                </p>
                <p>
                    Director : {movie.director}
                </p>
                <div>
                    <h3>Coming soon</h3>
                </div>
            </Col>
        </Row>
    )
}

export default NewMovie