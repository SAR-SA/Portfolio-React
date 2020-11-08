import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../components/Nav';
import "../styles/Projects.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import pic from '../assets/Image1.JPG'
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
                        {/* if isFaded == true, this card fades ... isFaded && color: red*/}
                        {/* <Card onMouseOver={changeFaded} className={!isNotFaded && "faded"} id="1"> */}
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {/* <Card onMouseOver={changeFaded} style={{color: red}} id="2"> */}
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {/* <Card onMouseOver={changeFaded} style={{color: red}} id="3"> */}
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <div className="col card"> */}
                </Row>
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


