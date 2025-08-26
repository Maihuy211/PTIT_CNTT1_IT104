import { useState } from "react";
import "./Form.css";
export default function Form() {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Nhập nội dung"
      />
      <p>{value}</p>
    </div>
  );
}
