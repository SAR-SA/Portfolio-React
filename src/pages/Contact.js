import React from 'react';
import FormControlLabel from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Nav from '../components/Nav';
import * as ReactBootstrap from "react-bootstrap";

const Contact = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>

            <h1>Contact Me!</h1>
            <ReactBootstrap.Form>
            <ReactBootstrap.Form.Group controlId="exampleForm.ControlInput1">
                    <ReactBootstrap.Form.Label>Name</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="name" placeholder="Enter Full Name" />
                </ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Group controlId="exampleForm.ControlInput1">
                    <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="email" placeholder="name@example.com" />
                </ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Group controlId="exampleForm.ControlTextarea1">
                    <ReactBootstrap.Form.Label>Message</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control as="textarea" rows={3} />
                </ReactBootstrap.Form.Group>
            </ReactBootstrap.Form>
            <ReactBootstrap.Button variant="dark" href="mailto: sarsa.web@gmail.com">Submit</ReactBootstrap.Button>
        </div>
    );
};

export default Contact;

