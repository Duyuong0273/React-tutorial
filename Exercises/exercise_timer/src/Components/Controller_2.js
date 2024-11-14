import { Button } from "antd";
import React from "react";

export default function Controller2({ isPlaying, onPlayPause, onReset }) {
  return (
    <div className="button-row">
      <Button className="btn" onClick={onPlayPause}>
        {isPlaying ? "Stop" : "Play"}
      </Button>
      <Button className="btn" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
