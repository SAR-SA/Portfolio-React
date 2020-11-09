import React from 'react';
import AboutPic from '../components/AboutPic';
import Summary from '../components/Summary';
import Nav from '../components/Nav';
import Languges from '../components/Languges';
import "../styles/About.css"
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Nav />
            <h1 className="aboutTitle">About</h1>
            <Container>
            <hr></hr>
            <Summary />
                <Row className="aboutRow">
                <Row>
                    <Col>
                    <AboutPic />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Languges />
                    </Col>
                </Row>
                </Row>
            </Container>


            <Footer />
        </div>

    );
};

export default About;