import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/exercise_1.css";

export default function Exercise1() {
  return (
    <>
      {/* section 1 */}
      <div>
        <h1 className="title">Let's test the grid</h1>
      </div>
      {/* section 2 */}
      <Container>
        <Row className="mb-3">
          {" "}
          <Col className="p-3 border border-dark">1 of 2</Col>{" "}
          <Col className="p-3 border border-dark">2 of 2</Col>
        </Row>
        <Row className="mb-3">
          <Col className="p-3 border border-dark">1 of 3</Col>
          <Col className="p-3 border border-dark">2 of 3</Col>
          <Col className="p-3 border border-dark">3 of 3</Col>
        </Row>
        <Row className="mb-3">
          <Col className="p-3 border border-dark">1 of 4</Col>
          <Col className="p-3 border border-dark">2 of 4</Col>
          <Col className="p-3 border border-dark">3 of 4</Col>
          <Col className="p-3 border border-dark">4 of 4</Col>
        </Row>
      </Container>
      {/* section 3 */}
      <div>
        <footer className="footer">Created by ABC!</footer>
      </div>
    </>
  );
}
