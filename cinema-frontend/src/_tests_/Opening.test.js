import renderer, { act } from 'react-test-renderer';
import Opening from '../components/Opening';

test('Opening page matches snapshot', () => {
    const tree = renderer.create(<Opening />);

    expect(tree).toMatchSnapshot();
});