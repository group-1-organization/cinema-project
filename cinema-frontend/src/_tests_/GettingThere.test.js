import renderer, { act } from 'react-test-renderer';
import GettingThere from '../components/getting-there/GettingThere';
import Marker from '../components/getting-there/Marker';

test('Getting there page matches snapshot', () => {
    const tree = renderer.create(<GettingThere />);

    expect(tree).toMatchSnapshot();
});

test('Marker matches snapshot', () => {
    const tree = renderer.create(<Marker />);

    expect(tree).toMatchSnapshot();
});