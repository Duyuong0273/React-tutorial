import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";

export default function Exercise_2_3() {
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(-10);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  useEffect(() => {
    let timer1, timer2;

    if (isPlaying1) {
      timer1 = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    if (isPlaying2) {
      timer2 = setInterval(() => {
        setTime2((prevTime2) => prevTime2 + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [isPlaying1, isPlaying2]);

  const handlePlay1 = () => {
    setIsPlaying1(!isPlaying1);
  };

  const handlePlay2 = () => {
    setIsPlaying2(!isPlaying2);
  };

  const handleReset1 = () => {
    setIsPlaying1(false);
    setTime(0);
  };

  const handleReset2 = () => {
    setIsPlaying2(false);
    setTime2(-10);
  };

  return (
    <div>
      <Row>
        <Col className="col-left" span={12}>
          <p className="number">{time}</p>
          <div className="button-row">
            <Button className="btn" onClick={handlePlay1}>
              {isPlaying1 ? "Pause" : "Play"}
            </Button>
            <Button className="btn" onClick={handleReset1}>
              Reset
            </Button>
          </div>
        </Col>
        <Col className="col-right" span={12}>
          <p className="number">{time2}</p>
          <div className="button-row">
            {" "}
            <Button className="btn" onClick={handlePlay2}>
              {isPlaying2 ? "Pause" : "Play"}
            </Button>
            <Button className="btn" onClick={handleReset2}>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
