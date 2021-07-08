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
                const DATA = res.data;
                console.log(DATA);
                setData(DATA);
            }).catch((err) => {
                console.log(err.message);
                setData([]);
            })
    }, [query]);

    const pagePaths = ["Opening Times", "Getting There", "Classifications", "Places To Go", "About", "Contact Page", "Screens", "Listing", "New Releases", "Discussion", "Ticket Booking"];
    let pageLinksCount = 0;

    const pageLinks = pagePaths.map(pagePath => {
        if (pagePath.toLowerCase().includes(query.toLowerCase())) {
            pageLinksCount++;
            return (
                <>
                    <Link to={`../${pagePath.replace(/\s/g, '')}`}><h1>{pagePath}</h1></Link>
                </>
            );
        }
    })

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

        for (let actor of movie.actors) {
            if (actor.toLowerCase().includes(query.toLowerCase())) {
                relevantSearchTerms.push(actor + " | ");
            }
        }

        return (
            <>
                <Link to={`../mymovies/${movie.title}`}><h1>{movie.title}</h1></Link>
                <p>Relevant search terms: {relevantSearchTerms}</p>

            </>
        )
    });

    if (data.length || pageLinksCount > 0) {
        return (
            <>
                <h2>Search Results:</h2>
                {pageLinks}
                <br />
                <br />
                {movieLinks}
            </>
        )
    } else {
        return (
            <h2>No search results</h2>
        );
    }
}

export default SearchPage;