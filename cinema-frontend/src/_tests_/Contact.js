// import { BrowserRouter as Router } from 'react-router-dom';
// import renderer, { act } from 'react-test-renderer';
// import { render } from "@testing-library/react";
// // import ContactUs from '../components/ContactUs';
// import ContactForm from '../components/ContactForm';
// import userEvent from "@testing-library/user-event";

// const utils = jest.createMockFromModule('../components/ContactForm').default;

// test('Contact Us page matches snapshot', () => {

//     const tree = renderer.create(<ContactUs />);

//     expect(tree).toMatchSnapshot();
// });

// test('Contact form matches snapshot', () => {
//     const tree = renderer.create(<ContactForm />);

//     expect(tree).toMatchSnapshot();
// });

// describe('contact form test', () => {

//     const email = "test@qa.com";
//     const name = "Scott";
//     const subject = "complaint";
//     const message = "your website makes me angry";

//     it('Input value should update when text is entered', () => {

//         const { form } = render(<ContactForm />);

//         const input1 = form.querySelector('#Email');
//         const input2 = form.querySelector('#Name');
//         const input3 = form.querySelector('#Subject');
//         const input4 = form.querySelector('#Message');

//         expect(input1.value).toEqual("");
//         expect(input2.value).toEqual("");
//         expect(input3.value).toEqual("");
//         expect(input4.value).toEqual("");

//         userEvent.type(input1, email);
//         userEvent.type(input2, name);
//         userEvent.type(input3, subject);
//         userEvent.type(input4, message);

//         expect(input1.value).toEqual(email);
//         expect(input1.value).toEqual(name);
//         expect(input1.value).toEqual(subject);
//         expect(input1.value).toEqual(message);

//     })

//     it('Submits the form', () => {

//     })
// })

