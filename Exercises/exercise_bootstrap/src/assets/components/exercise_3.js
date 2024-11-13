import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/exercise_3.css";

export default function Exercise3() {
  return (
    <>
      <h1 className="title">Let's test the grid!</h1>
      <div>
        <a className="tabs" href="#">
          Active
        </a>
        <a className="tabs" href="#">
          Link
        </a>
        <a className="tabs" href="#">
          Link
        </a>
        <a className="text">Disable</a>
      </div>

      <div>
        <Container>
          <Row>
            <Col className="p-3 border border-dark">First col</Col>
            <Col className="p-3 border  border-dark">Second col</Col>
          </Row>
          <Row>
            <Col className="p-3 border  border-dark">col</Col>
            <Col className="p-3 border  border-dark">col</Col>
            <Col className="p-3 border  border-dark">col</Col>
          </Row>
          <Row className="mb-3">
            <Col className="p-3 border  border-dark">col</Col>
            <Col className="p-3 border  border-dark">col</Col>
            <Col className="p-3 border  border-dark">col</Col>
            <Col className="p-3 border  border-dark">col</Col>
          </Row>
        </Container>
      </div>
      <div>
        <footer className="footer">Created by ABC!</footer>
      </div>
    </>
  );
}
