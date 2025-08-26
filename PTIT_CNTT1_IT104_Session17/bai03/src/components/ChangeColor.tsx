import { useState } from "react";
import "./ChangeColor.css";
export default function ChangeColor() {
  const [color, setClolor] = useState("black");
  const handleChange = () => {
    setClolor(color === "black" ? "red" : "black");
  };
  return (
    <div>
      <p className={color === "black" ? "black" : "red"}>Tiêu đề văn bản</p>
      <button onClick={handleChange}>Đổi đổi màu</button>
    </div>
  );
}