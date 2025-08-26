import { useState } from "react";
import "./SelectOption.css";
export default function SelectOption() {
  const [option, setOption] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value);
  };
  return (
    <div>
      <p>Thành phố: {option}</p>
      <select value={option} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  );
}
