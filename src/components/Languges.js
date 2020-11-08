import React from 'react';
import * as ReactBootstrap from "react-bootstrap";


function Languages() {
  return (
    <ReactBootstrap.ListGroup>
  <ReactBootstrap.ListGroup.Item>No style</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="primary">HTML</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="secondary">CSS</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="success">Javascript</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="danger">React</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="warning">Node.js</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="info">Info</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="light">Light</ReactBootstrap.ListGroup.Item>
  <ReactBootstrap.ListGroup.Item variant="dark">Dark</ReactBootstrap.ListGroup.Item>
</ReactBootstrap.ListGroup>
  )
}

export default Languages
