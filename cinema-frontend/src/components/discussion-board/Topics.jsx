import { useState, useEffect } from 'react';
import axios from 'axios';
import TopicCard from './TopicCard';

const Topics = ({ topicsLoaded, setTopicsLoaded }) => {

    const [topics, setTopics] = useState([]);

    const getTopics = () => {
        axios.get(`http://localhost:5000/cinema/topics`).then((response) => {
            setTopicsLoaded(true)
            setTopics(response.data);
        })
    }

    useEffect(() => getTopics(), [topicsLoaded]);

    return (
        <>
            {topics.map((topic, index) => (
                <TopicCard topic={topic} key={index} />
            ))}
        </>
    )
}

export default Topics
