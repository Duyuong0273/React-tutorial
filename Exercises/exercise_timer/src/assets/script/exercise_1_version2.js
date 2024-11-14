import { Col, Row } from "antd";
import React, { useState } from "react";
import Controller from "../../Components/Controller";

export default function Time() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  return (
    <div>
      <Row>
        <Col className="col-left" span={12}>
          <Controller
            count={count}
            setCount={setCount}
            increment={1}
            resetValue={0}
          />
        </Col>
        <Col className="col-right" span={12}>
          <Controller
            count={count2}
            setCount={setCount2}
            increment={-1}
            resetValue={10}
          />
        </Col>
      </Row>
    </div>
  );
}
