import React from 'react';
import { ListGroup } from "react-bootstrap";



function Languages() {
  return (
    <ListGroup>
  <ListGroup.Item variant="primary">Languages</ListGroup.Item>
  <ListGroup.Item variant="light">HTML</ListGroup.Item>
  <ListGroup.Item variant="secondary">CSS</ListGroup.Item>
  <ListGroup.Item variant="light">Javascript</ListGroup.Item>
  <ListGroup.Item variant="secondary">React</ListGroup.Item>
  <ListGroup.Item variant="light">Node.js</ListGroup.Item>
</ListGroup>
  )
}

export default Languages
