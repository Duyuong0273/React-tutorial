import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "../style/exercise.css";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  return (
    <div>
      <Row>
        <Col className="col-left" span={12}>
          <p className="number">{count}</p>
          <div className="button-row">
            <Button className="btn" onClick={() => setCount(count + 1)}>
              Up
            </Button>
            <Button className="btn" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
        </Col>
        <Col className="col-right" span={12}>
          <p className="number">{count2}</p>
          <div className="button-row">
            <Button className="btn" onClick={() => setCount2(count2 - 1)}>
              Down
            </Button>
            <Button className="btn" onClick={() => setCount2(10)}>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
