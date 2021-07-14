import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

test('Header matches snapshot', () => {
    const tree = renderer.create(<Router><Header /></Router>);

    expect(tree).toMatchSnapshot();
});

test('Footer matches snapshot', () => {
    const tree = renderer.create(<Router><Footer /></Router>);

    expect(tree).toMatchSnapshot();
});