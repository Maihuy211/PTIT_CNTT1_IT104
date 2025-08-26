import React, { useState } from "react";
import "./Checkbox.css";
export default function Checkbox() {
  const [values, setValues] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      // nếu checkbox được chọn, thêm vào mảng
      setValues([...values, value]);
    } else {
      // nếu checkbox bị bỏ chọn, loại bỏ khỏi mảng
      setValues(values.filter((val) => val !== value));
    }
  };
  return (
    <div>
      <p>Sở thích: [{values.join(", ")}]</p>
      <label>
        <input type="checkbox" value="Đi chơi" onChange={handleChange} />
        Đi chơi
      </label>
      <br />
      <label>
        <input type="checkbox" value="Code" onChange={handleChange} />
        Code
      </label>
      <br />
      <label>
        <input type="checkbox" value="Bơi lội" onChange={handleChange} />
        Bơi lội
      </label>
      <br />
      <label>
        <input type="checkbox" value="Nhảy dây" onChange={handleChange} />
        Nhảy dây
      </label>
    </div>
  );
}
