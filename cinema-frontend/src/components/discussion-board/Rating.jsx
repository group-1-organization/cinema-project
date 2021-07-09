import { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const Rating = ({ topic, ratingLoaded, setRatingLoaded }) => {

    const [movieRating, setMovieRating] = useState({});

    const getMovieRating = async () => {
        await axios.get(`http://localhost:5000/cinema/ratings/movie/${topic.movieName}`).then((response) => {
            setMovieRating(response.data[0]);
            setRatingLoaded(true);
        })
    }

    useEffect(() => {
        if (topic.movieName !== undefined) {
            getMovieRating();
        }
    }, [ratingLoaded, topic]);

    if (movieRating === undefined) {
        return (
            <p>No Ratings</p>
        )
    } else if (!ratingLoaded) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <div>
                <p>Current average rating by {movieRating.count} people</p>
                <StarRatings
                    rating={movieRating.avgRating}
                    starDimension="40px"
                    starRatedColor="gold"
                />
            </div >
        )
    }

}

export default Rating
