import renderer, { act } from 'react-test-renderer';
import Screens from '../components/Screens';

test('Screens page matches snapshot', () => {
    const tree = renderer.create(<Screens />);

    expect(tree).toMatchSnapshot();
});