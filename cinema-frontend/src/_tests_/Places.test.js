import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Places from '../components/placestogo/Places';
import Venue from '../components/placestogo/Venue';

test('Places page matches snapshot', () => {
    const tree = renderer.create(
        <Router>
            <Places />
        </Router>);

    expect(tree).toMatchSnapshot();
});

test('Venue matches snapshot', () => {

    const venue = {
        _id: "60ec4b6d7b36692e24ee1f55",
        name: "KFC",
        picture: "KFC.jpg",
        opening: "9.00 - 10.30",
        description: "KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken",
        contact: "0344 800 2400",
        offer: "N/A"
    }
    const tree = renderer.create(<Venue venue={venue} />);

    expect(tree).toMatchSnapshot();
});