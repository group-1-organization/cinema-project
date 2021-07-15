import Movie from '../components/listings/NewMovie'
import { screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";










describe('Card render', () => {
    jest.mock("axios");


    const movie = {
        title: "In The Heights",
        poster: "ith.jpg",
        director: "John M. Chu",
        description: "A film version of the Broadway musical in which Usnavi, a sympathetic New York bodega owner, saves every penny every day as he imagines and sings about a better life.",
        actors: ["Jimmy Smits",
            "Dascha Polanco",
            "Lin-Manuel Miranda",
            "Stephanie Beatriz",
            "Susan Pourfar"],
        showings: [
            "11:00",
            "13:15",
            "14:00",
            "16:30",
            "18:00"
        ]
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

    it('should make a Card with image of the movie', () => {

        render(< Router ><Movie movie={movie} /></ Router >, container);



        expect(screen.getByAltText(movie.poster)).toBeInTheDocument();
        expect(screen.getByText(`${movie.title}`)).toBeInTheDocument();
        expect(screen.getByText(`Director : ${movie.director}`)).toBeInTheDocument();
        expect(screen.getByText(`${movie.actors[0]} |`)).toBeInTheDocument();








    }
    )
})