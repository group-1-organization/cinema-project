import { useState, useEffect } from 'react';
import axios from 'axios';

import Comment from './Comment';

const Comments = ({ topic, commentsLoaded, setCommentsLoaded }) => {

    const [comments, setComments] = useState([]);

    const getComments = async () => {
        await axios.get(`http://localhost:5000/cinema/comments/${topic._id}`).then((response) => {
            setCommentsLoaded(true);
            setComments(response.data);
        })
    }

    useEffect(() => {
        if (topic !== undefined) {
            getComments();
        }
    }, [commentsLoaded]);

    return (
        <>
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </>
    )
}

export default Comments
