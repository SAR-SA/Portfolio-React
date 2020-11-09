import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Form, Button, Container } from "react-bootstrap";
// import {Form, Button} from "react-bootstrap"

const Contact = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <Container>
            <h1 className="contactTitle mt-3">Contact Me!</h1>
            <hr></hr>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="dark" href="mailto: sarsa.web@gmail.com">Submit</Button>
            </Container>
        <Footer />
        </div>
    );
};

export default Contact;
