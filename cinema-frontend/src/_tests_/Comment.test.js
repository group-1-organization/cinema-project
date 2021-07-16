import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Comment from "../components/discussion-board/Comment";

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

it("renders a comment", () => {

    Date.now = jest.fn(() => new Date("2021-01-02T00:00:00+0000"));

    const comment = {
        author: "Joni Baez",
        createdAt: "2021-01-01T00:00:00+0000",
        message: "comment for comment component test"
    };

    act(() => {
        render(<Comment comment={comment} />, container);
    });

    expect(container.querySelector("strong").textContent).toBe(comment.author);
    expect(container.querySelector("small").textContent).toBe("a day ago");
    expect(container.querySelectorAll("p")[1].textContent).toBe(comment.message);
});