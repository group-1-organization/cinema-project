import Venue from '../components/placestogo/Venue'
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";

import { render, unmountComponentAtNode } from "react-dom";






describe('Card render', () => {
    const venue = {
        name: "KFC",
        picture: "KFC.jpg",
        opening: "9.00 - 10.30",
        description: "KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken",
        contact: "0344 800 2400",
        offer: "N/A"
    }

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
            render(<Venue venue={venue} />, container);
        });

        expect(screen.getByText(`${venue.name}`)).toBeInTheDocument();
        expect(screen.getByAltText(`${venue.picture}`)).toBeInTheDocument();
        expect(screen.getByText(`Opening Times: ${venue.opening}`)).toBeInTheDocument();
        expect(screen.getByText(`${venue.description}`)).toBeInTheDocument();
        expect(screen.getByText(`Contact Number: ${venue.contact}`)).toBeInTheDocument();
        expect(screen.getByText(`Offers: ${venue.offer}`)).toBeInTheDocument();



    })



})