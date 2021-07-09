import React from "react";
import { Container, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";
//import "./Payment.css";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Payment = ({ booking, price, closeModal }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        closeModal();
    }
    const handleShow = () => setShow(true);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: price,
                        currency_code: "GBP"
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        setShow(true);
        return actions.order.capture();
    };

    return (
        <Container>
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Booking Complete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Thanks {booking.booker}, you have booked:</h2>
                    <h3>Movie: {booking.movie}</h3>
                    <h3>Screening: {booking.screening}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Payment;