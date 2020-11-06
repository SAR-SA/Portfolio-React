import React from 'react';
import FormControlLabel from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Nav from '../components/Nav';

const Contact = () => {
    return (
            <div>
            <div>
                <Nav />
            </div>
                <h1>Contact Me</h1>
                <TextField 
                    varient="outlined"
                    color="secondary"
                    type="name"
                    label="name"
                    placeholder="name"
                />
                <TextField 
                    varient="outlined"
                    color="secondary"
                    type="email"
                    label="email"
                    placeholder="email"
                />
                <TextField 
                    varient="outlined"
                    color="secondary"
                    type="message"
                    label="message"
                    placeholder="message"
                />
            </div>
    );
}; 

export default Contact;

