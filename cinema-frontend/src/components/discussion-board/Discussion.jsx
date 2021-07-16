import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Topics from './Topics';
import TopicForm from './TopicForm';

const Discussion = () => {

    const [topicsLoaded, setTopicsLoaded] = useState(false);

    return (
        <div>
            <div className="page-header">
                <h1>Discussion board</h1>
            </div>

            <Container>
                <h3>Topics</h3>
                <TopicForm setTopicsLoaded={setTopicsLoaded} />
                <Topics topicsLoaded={topicsLoaded} setTopicsLoaded={setTopicsLoaded} />
            </Container >
        </div>
    )
}

export default Discussion
