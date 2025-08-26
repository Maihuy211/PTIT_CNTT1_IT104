import { useState } from "react";
import "./Toggle.css";
export default function Toggle() {
  const [hidden, setHidden] = useState(true);
  const handleChange = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      <button onClick={handleChange}>{hidden ? "Hiện" : "Ẩn"}</button>
      <p className={hidden ? "hidden" : "presently"}>Tiêu đề văn bản</p>
    </div>
  );
}
