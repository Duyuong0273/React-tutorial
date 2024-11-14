import { Button } from "antd";

export default function Controller({ count, setCount, increment, resetValue }) {
  return (
    <div>
      <p className="number">{count}</p>
      <div className="button-row">
        <Button className="btn" onClick={() => setCount(count + increment)}>
          {increment > 0 ? "Up" : "Down"}
        </Button>
        <Button className="btn" onClick={() => setCount(resetValue)}>
          Reset
        </Button>
      </div>
    </div>
  );
}
