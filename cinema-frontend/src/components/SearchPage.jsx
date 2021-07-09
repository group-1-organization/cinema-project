import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const SearchPage = () => {

    let { query } = useParams();
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/cinema/movies/find/${query}`)
            .then((res) => {
                console.log(query);
                console.log(res);
                const movieData = res.data;
                console.log(movieData);
                setData(movieData);
            }).catch((err) => {
                console.log(err.message);
                setData([]);
            })
    }, [query]);

    const movieLinks = data.map(movie => {
        let relevantSearchTerms = []

        if (movie.title.toLowerCase().includes(query.toLowerCase())) {
            relevantSearchTerms.push(movie.title + " | ");
        }

        for (let director of movie.director) {
            if (director.toLowerCase().includes(query.toLowerCase())) {
                relevantSearchTerms.push(movie.director + " | ");
            }
        }
        // const actorList = (movie.actors.toString());
        // console.log(actorList);
        for (let actor of movie.actors) {
            if (actor.toLowerCase().includes(query.toLowerCase())) {
                relevantSearchTerms.push(actor + " | ");
                console.log(actor);
                //console.log(movie.actors);
            }
        }

        return (
            <div>
                <Link to={`../movies/${movie.title}`}><h1>{movie.title}</h1></Link>
                <p>Relevant search terms: {relevantSearchTerms}</p>

            </div>
        )
    });

    if (data.length) {
        return (
            <>
                <h2>Search Results:</h2>
                <br />
                <br />
                {movieLinks}
            </>
        )
    } else {
        return (
            <h2>No matches found</h2>
        );
    }
}

export default SearchPage;

//|| pageLinksCount > 0