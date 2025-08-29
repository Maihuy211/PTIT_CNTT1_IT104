import { useState, useRef, useEffect, type ChangeEvent } from "react";
import "./RenderCounter.css";
export default function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h2>Componet Render Counter</h2>
      <label htmlFor="">Input: </label>
      <input type="text" value={value} onChange={handleChange} />
      <p>Component: {renderCount.current}</p>
    </div>
  );
}
