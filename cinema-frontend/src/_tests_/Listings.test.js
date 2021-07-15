import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Listings from '../components/listings/Listings';
import NewListings from '../components/listings/NewListings';
import Movie from '../components/listings/Movie';
import Showings from '../components/listings/Showings';
import { useState } from 'react';

test('Listings page matches snapshot', () => {
    const tree = renderer.create(<Listings />);

    expect(tree).toMatchSnapshot();
});

test('New Listings page matches snapshot', () => {
    const tree = renderer.create(<NewListings />);

    expect(tree).toMatchSnapshot();
});

test('Movie page matches snapshot', () => {
    const tree = renderer.create(<Router><Movie /></Router>);

    expect(tree).toMatchSnapshot();
});

test('Showings matches snapshot', () => {
    const tree = renderer.create(<Router><Showings /></Router>);

    expect(tree).toMatchSnapshot();
});

// describe('Showings coverage', () => {

//     it('Set time and title', () => {

//         const movie = {
//             actors: [
//                 "Emily Blunt",
//                 "Djimon Hounsou",
//                 "Cillian Murphy",
//                 "Noah Jupe",
//                 "Millicent Simmonds"
//             ],
//             showings: [
//                 "16:30",
//                 "18:00",
//                 "20:00"
//             ],
//             _id: "60e842fd882b248769aa50ea",
//             title: "A Quiet Place Part II",
//             poster: "aqp.jpg",
//             director: "John Krasinski",
//             description: "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path."
//         }

//         const [time, setTime] = useState();
//         const [title, setTitle] = useState();

//         let time1 = movie.showings[0];
//         let title1 = movie.title;

//         setTime(time1);
//         setTitle(title1);

//         expect(time).toEqual("16:30");
//         expect(title).toEqual("A Quiet Place Part II");
//     })
// })