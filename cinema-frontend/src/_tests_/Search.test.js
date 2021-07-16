import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchPage from '../components/SearchPage';
import NavSearch from '../components/NavSearch';

test('Search page matches snapshot', () => {
    const tree = renderer.create(<Router > <SearchPage /></Router >);

    expect(tree).toMatchSnapshot();
});

test('NavSearch matches snapshot', () => {
    const tree = renderer.create(<Router ><NavSearch /></Router >);

    expect(tree).toMatchSnapshot();
});