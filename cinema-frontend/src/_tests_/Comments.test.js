import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Comments from "../components/discussion-board/Comments";
import axios from 'axios';
jest.mock('axios');

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

it("renders user data", async () => {
    const comments = [
        {
            _id: "60ed66574c810a21744214b1",
            topicId: "60e861bd5b541b2420b17c30",
            message: "Still works ? ",
            author: "Amandeep",
            createdAt: "2021-07-13T10:09:27.187Z",
            updatedAt: "2021-07-13T10:09:27.187Z",
            __v: 0,
        },
        {
            _id: "60e861db5b541b2420b17c5f",
            topicId: "60e861bd5b541b2420b17c30",
            message: "Its Diesel time",
            author: "Amandeep",
            createdAt: "2021-07-09T14:48:59.659Z",
            updatedAt: "2021-07-09T14:48:59.659Z",
            __v: 0,
        },
        {
            _id: "60e861ca6520c744281d9d0f",
            topicId: "60e861bd5b541b2420b17c30",
            message: "testing testing",
            author: "James",
            createdAt: "2021-07-09T14:48:42.902Z",
            updatedAt: "2021-07-09T14:48:42.902Z",
            __v: 0,
        },
    ];

    const topic = {
        _id: "60e861bd5b541b2420b17c30",
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(comments));

    await act(async () => {
        render(<Comments topic={topic} />, container);
    });

});
