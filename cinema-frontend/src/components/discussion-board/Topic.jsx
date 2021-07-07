import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";

const Topic = () => {

    const { id } = useParams();

    return (
        <Container>
            <h1>Topic</h1>
            <p>{id}</p>
        </Container>
    )
}

export default Topic
