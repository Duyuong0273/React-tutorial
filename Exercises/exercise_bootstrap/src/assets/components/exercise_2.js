import React from "react";
import "../styles/exercise_2.css";
import { Col, Row } from "react-bootstrap";
import script from "../image/script.png";
import css from "../image/css.png";
import bootstrap from "../image/bootstrap.png";

export default function Exercise2() {
  return (
    <div>
      <h1 className="header">My First Bootstap Page</h1>
      <Row className="mb-3">
        <Col className="p-3">
          <img src={script} />
        </Col>
        <Col className="p-3">
          <img src={css} />
        </Col>
        <Col className="p-3">
          <img src={bootstrap} />
        </Col>
      </Row>
    </div>
  );
}
