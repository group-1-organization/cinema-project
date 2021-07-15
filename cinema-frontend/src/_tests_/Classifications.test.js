import renderer, { act } from 'react-test-renderer';
import Classifications from '../components/Classifications';

test('Classifications page matches snapshot', () => {
    const tree = renderer.create(<Classifications />);

    expect(tree).toMatchSnapshot();
});