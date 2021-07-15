import React from "react";
import ContactForm from "../components/ContactForm";
import { render, unmountComponentAtNode } from "react-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe(`Form testing`, () => {
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

    describe(`onSubmit test`, () => {

        // Parent level arranging
        const email = "test@gmail.com";
        const name = "John Smith";
        const subject = "Test";
        const message = "Test Complaint 123...123...";
        it('Should enter Values into the Form', () => {


            act(() => {
                render(<ContactForm />, container)
            });


            const Email = container.querySelector('#Email');
            const Name = container.querySelector('#Name');
            const Subject = container.querySelector('#Subject');
            const Message = container.querySelector('#Message');


            userEvent.type(Email, email);
            userEvent.type(Name, name);
            userEvent.type(Subject, subject);
            userEvent.type(Message, message);

            expect(Email.value).toEqual(name);
            expect(Name.value).toEqual(email);
            expect(Subject.value).toEqual(last);
            expect(Message.value).toEqual(msg);
        });

        it('Shoould Call the MockSubmit function', () => {

            act(() => {
                render(<ContactForm />, container);
            });

            const mockSubmit = jest.fn();

            const submitButton = container.querySelector('#submit');

            // Act
            submitButton.onClick = mockSubmit();
            userEvent.click(submitButton, mockSubmit())

            // Assert
            expect(mockSubmit).toHaveBeenCalled();

        });

    });
})