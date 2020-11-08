import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import "../styles/Projects.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import pic from '../assets/Image1.JPG';
// import a css file with a class to make things faded, let's cal it .faded

// // isFaded holds State, SetFaded sets the state
// const [isNotFaded, setNotFaded] = useState(0);

// // Function should change is hovered
// function changeFaded(e) {
//     const id = e.target.id;
//     setNotFaded(id);
//     // for all of the cards, if id !== this id, then fade them
// }


function Projects() {
    return (
        <div>
            <Nav />
            <h1 className="projectsTitle">Projects</h1>
            <Container>
                <Row>
                    <Col>
                        <div className="contain col-sm ml-2 mr-2">
                            <img className="projectsPic" src={pic} alt="" />
                            <div className="centered">Centered</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="contain col-sm ml-2 mr-2">
                            <img className="projectsPic" src={pic} alt="" />
                            <div className="centered">Centered</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="contain col-sm ml-2 mr-2">
                            <img className="projectsPic" src={pic} alt="" />
                            <div className="centered">Centered</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Projects;
