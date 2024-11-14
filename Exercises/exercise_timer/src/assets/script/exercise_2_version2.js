import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Controller2 from "../../Components/Controller_2";

export default function Timer2() {
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(10);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  // useEffect cho bộ đếm time (tăng lên mỗi giây)
  useEffect(() => {
    let interval;
    if (isPlaying1) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Clean up khi component unmount
  }, [isPlaying1]);

  // useEffect cho bộ đếm time2 (giảm xuống mỗi giây)
  useEffect(() => {
    let interval;
    if (isPlaying2) {
      interval = setInterval(() => {
        setTime2((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Clean up khi component unmount
  }, [isPlaying2]);

  const handlePlayPause1 = () => {
    setIsPlaying1((prev) => !prev); // Chuyển trạng thái chơi hoặc dừng cho time
  };

  const handlePlayPause2 = () => {
    setIsPlaying2((prev) => !prev); // Chuyển trạng thái chơi hoặc dừng cho time2
  };

  const handleReset1 = () => {
    setTime(0); // Đặt lại time về 0
  };

  const handleReset2 = () => {
    setTime2(10); // Đặt lại time2 về 10
  };

  return (
    <div>
      <Row>
        <Col className="col-left" span={12}>
          <p className="number">{time}</p>
          <Controller2
            isPlaying={isPlaying1}
            onPlayPause={handlePlayPause1}
            onReset={handleReset1}
          />
        </Col>
        <Col className="col-right" span={12}>
          <p className="number">{time2}</p>
          <Controller2
            isPlaying={isPlaying2}
            onPlayPause={handlePlayPause2}
            onReset={handleReset2}
          />
        </Col>
      </Row>
    </div>
  );
}
