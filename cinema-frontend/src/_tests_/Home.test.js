import renderer, { act } from 'react-test-renderer';
import Home from '../components/Home';

test('Homepage matches snapshot', () => {
    const tree = renderer.create(<Home />);

    expect(tree).toMatchSnapshot();
});