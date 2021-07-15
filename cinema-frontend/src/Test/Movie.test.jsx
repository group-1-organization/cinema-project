import Movie from '../components/listings/Movie'
import { screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";



describe('Card render', () => {

    let container = null;

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('test to see if ', () => {

        render(< Router ><Movie /></ Router >, container);



        expect(screen.getByText('loading...')).toBeInTheDocument();








    })



})