import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import wii from "../../img/imgWii.jpg";
import React from "react";
import Button from "react-bootstrap/Button";
function GridExample() {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={wii} />
            <Card.Body>
              <Card.Title>nintendo Wii</Card.Title>
              <Card.Text>
               NUEVO EN SU CAJA ENTREGA PERSONAL!
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Diegoarraez10@hotmail.com</Card.Subtitle>
              <Card.Text><strong>Price: </strong>$60.00</Card.Text>
              <div className="d-flex justify-content-center gap-1">
                <Button variant="primary">Add to cart</Button>
                <Button variant="primary">Details</Button>
                <Button variant="primary">Buy now!</Button>
                
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
