import Showings from '../components/listings/Showings'
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { render, unmountComponentAtNode } from "react-dom";






describe('Card render', () => {
    const showing = "11:00";

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

    it('should make a Card for the venue', () => {
        act(() => {
            render(<Router><Showings showing={showing} /></Router>, container);
        });

        expect(screen.getByText(`${showing}`)).toBeInTheDocument();




    })



})