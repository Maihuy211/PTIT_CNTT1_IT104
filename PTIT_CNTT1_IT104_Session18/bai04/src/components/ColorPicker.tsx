import React, { useState, useCallback } from "react";
import "./ColorPicker.css";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setColor(event.target.value);
    },
    []
  );

  return (
    <div>
      <div>
        <label>Màu người dùng chọn: </label>
      </div>
      <input type="color" value={color} onChange={handleChangeColor} />

      <p>Màu hiển thị:</p>
      <div className="color" style={{ backgroundColor: color }}></div>
    </div>
  );
}
