import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

test('About Us page matches snapshot', () => {
    const tree = renderer.create(<Router><AboutUs /></Router>);

    expect(tree).toMatchSnapshot();
});