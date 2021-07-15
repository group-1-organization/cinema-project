import Places from '../components/placestogo/Places'
import { BrowserRouter as Router } from 'react-router-dom';


import { create } from 'react-test-renderer'

describe("Places components", () => {


    let testComponent;

    beforeEach(() => {
        const TestInstance = create(<Router><Places /></Router>);
        testComponent = TestInstance.root;
    });

    it('should see a header', () => {
        //arrange
        const text = "Places to go";
        //act
        const h1 = testComponent.findByType('h1');
        //assert
        expect(h1.children).toEqual([text]);



    })
})