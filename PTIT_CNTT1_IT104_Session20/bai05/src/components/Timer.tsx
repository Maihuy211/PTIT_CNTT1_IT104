import { useState, useEffect } from "react";
import "./Timer.css";
export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <h3>Bộ đếm thời gian</h3>
      <p>Giá trị: {count}</p>
    </div>
  );
}
