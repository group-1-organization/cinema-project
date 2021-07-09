import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import StarRatings from 'react-star-ratings';

const RatingForm = ({ topic, setRatingLoaded }) => {

    const [stars, setStars] = useState(0);

    const submitRating = () => {
        if (stars !== 0) {
            let rating = {
                movieName: topic.movieName,
                rating: stars
            };
            axios.post(`http://localhost:5000/cinema/ratings/`, rating).then((response) => {
                setRatingLoaded(false);
                setStars(0);
            })
        }
    }

    return (
        <>
            <StarRatings
                rating={stars}
                starRatedColor="gold"
                starHoverColor="gold"
                changeRating={setStars}
                numberOfStars={5}
                name="rating"
                starDimension="1em"
                starSpacing="0px"
            />
            <Button onClick={submitRating} className="m-3">Submit</Button>
        </>
    )
}

export default RatingForm
