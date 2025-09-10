import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Student() {
  const [search, setSearch] = useSearchParams();
  const searchValue = search.get("StudentName") || "";

  const [inputValue, setInputValue] = useState(searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setSearch({ StudentName: inputValue });
  };

  return (
    <div>
      <div className="input">
        <input type="search" value={inputValue} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>
          Tìm kiếm
        </button>
      </div>
      <div>{searchValue}</div>
    </div>
  );
}
