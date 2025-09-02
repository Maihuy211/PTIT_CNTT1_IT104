import { useState } from "react";
import "./Input.css";
export default function Input() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const lenValue = value.length;
  return (
    <div className="container">
      <h3>Kiểm tra độ dài chuỗi nhập vào</h3>
      <input type="text" onChange={handleChange} value={value} />
      <div>
        {lenValue > 5 && <p className="erorr">Chuỗi nhập vào hone 5 kí tự</p>}
      </div>
    </div>
  );
}
