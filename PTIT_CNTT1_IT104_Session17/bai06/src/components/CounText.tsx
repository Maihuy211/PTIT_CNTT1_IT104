import { useState } from "react";
import "./CounText.css";
export default function CounText() {
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const count = text.length;
  return (
    <div>
      <textarea value={text} onChange={handleChange}></textarea>
      <p>Số ký tự : {count}</p>
    </div>
  );
}
