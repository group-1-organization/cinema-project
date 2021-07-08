// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import ReactDOM from "react-dom";
// import Modal from 'react-bootstrap/Modal'
// import { useState } from "react";

// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

// const Payment = ({ booking }, { price }) => {

//     const [show, setShow] = useState(false);

//     const createOrder = (data, actions) => {
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     amount: {
//                         value: price,
//                         currency_code: "GBP"
//                     },
//                 },
//             ],
//         });
//     };

//     const onApprove = (data, actions) => {
//         setShow(true);
//         return actions.order.capture();
//     };

//     return (
//         <Container>
//             <PayPalButton
//                 createOrder={(data, actions) => createOrder(data, actions)}
//                 onApprove={(data, actions) => onApprove(data, actions)}
//             />

//             <Modal show={show} size="lg">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Booking Complete</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <h3>Movie</h3>
//                     <h3>Screening</h3>

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={setShow(false)}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }

// export default Payment;