import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Listings from '../components/listings/Listings';
import NewListings from '../components/listings/NewListings';
import Movie from '../components/listings/Movie';
import Showings from '../components/listings/Showings';

test('Listings page matches snapshot', () => {
    const tree = renderer.create(<Listings />);

    expect(tree).toMatchSnapshot();
});

test('New Listings page matches snapshot', () => {
    const tree = renderer.create(<NewListings />);

    expect(tree).toMatchSnapshot();
});

// test('Movie page matches snapshot', () => {
//     const tree = renderer.create(<Movie />);

//     expect(tree).toMatchSnapshot();
// });

test('Showings matches snapshot', () => {
    const tree = renderer.create(<Router><Showings /></Router>);

    expect(tree).toMatchSnapshot();
});